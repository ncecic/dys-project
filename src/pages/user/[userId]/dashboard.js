import Layout from '../../../components/layout/Layout';
import { useSession } from 'next-auth/react';
import { prisma } from '@/src/server/db/client';
import { useRouter } from 'next/router';
import NotAuth from '@/src/components/NotAuth';
import DashboardData from '../../../components/DashboardData';

function Dashboard({ user, error }) {
  const { data: session } = useSession();
  const router = useRouter();
  const sessionUserId = session?.user?.userId;

  if (error || !user || sessionUserId != router.query.userId) {
    return <NotAuth />;
  }

  return (
    <Layout>
      <h1>Dashboard</h1>
      <DashboardData company={user} />
    </Layout>
  );
}

export default Dashboard;

export async function getServerSideProps(ctx) {
  const user = await prisma.user.findFirst({
    where: {
      id: parseInt(ctx.params.userId),
    },
    include: {
      profile: true,
    },
  });

  if (!user) {
    return {
      props: {
        error: 'User not found'
      }
    }
  }

  user.registeredAt = user.registeredAt.toString();

  return {
    props: {
      user,
    },
  };
}
