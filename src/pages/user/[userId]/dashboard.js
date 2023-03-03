import Layout from '../../../components/layout/Layout';
import CompanyData from '../../../components/CompanyData';
import { useSession } from 'next-auth/react';
import { prisma } from '@/src/server/db/client';
import { useRouter } from 'next/router';

function Dashboard({ user }) {
  const { data: session } = useSession();
  const router = useRouter();
  let sessionUserId;

  try {
    sessionUserId = session.user.userId;
  } catch (error) {
    console.log(error);
    sessionUserId = null;
  }

  // console.log('session.user.userId: ', session.user.userId);
  // console.log('Router: ', router.query.userId);

  if (!user || sessionUserId && sessionUserId != router.query.userId) {
    return (
      <iframe
        src="https://giphy.com/embed/owRSsSHHoVYFa"
        width="480"
        height="360"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
    );
  }

  return (
    <Layout>
      <h1>Dashboard</h1>
      <CompanyData company={user} />
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
  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
    },
  };
}
