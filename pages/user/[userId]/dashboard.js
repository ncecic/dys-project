import Layout from '../../../components/layout/Layout';
import { prisma } from '@/server/db/client';
import CompanyData from '../../../components/CompanyData';
import { useSession } from 'next-auth/react';

function Dashboard({ user }) {
  const { data: session } = useSession();

  if (!session) {
    return (

        <iframe
          src="https://giphy.com/embed/owRSsSHHoVYFa"
          width="480"
          height="360"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>

    );
  }

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
