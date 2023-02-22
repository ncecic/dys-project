import Layout from '../../../components/layout/Layout';
import { prisma } from '@/server/db/client';
import CompanyData from '../../../components/CompanyData';

function Dashboard({ user }) {
  return (
    <Layout>
      <CompanyData company={user} />
    </Layout>
  );
}

export default Dashboard;

export async function getServerSideProps(ctx) {
  const user = await prisma.users.findFirst({
    where: {
      userId: parseInt(ctx.params.userId),
    },
  });
  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
    },
  };
}
