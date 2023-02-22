import Layout from '@/components/layout/Layout';
import SettingsUpdate from '@/components/SettingsUpdate';
import Card from '@/components/ui/Card';
import { prisma } from '@/server/db/client';
// import { prisma } from '../../server/db/client';
import axios from 'axios';
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Cookies from 'react-cookie/cjs/Cookies';

function Settings({ user }) {
  const router = useRouter();

  async function updateSettingsHandler(usrData) {
    try {
      await axios.put('http://localhost:3000/api/posts', {
        id: parseInt(router.query.userId),
        email: usrData.email,
        name: usrData.name,
        oib: usrData.oib,
        phone: usrData.phone,
        address: usrData.address,
        zip: parseInt(usrData.zip),
        country: usrData.country,
        city: usrData.city,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Layout>
      <h1>Settings</h1>
      <Card>
        <SettingsUpdate
          onUpdateSettings={updateSettingsHandler}
          getUser={user}
        />
      </Card>
    </Layout>
  );
}

export default Settings;

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

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

// export async function getServerSideProps(ctx) {
//   const session = getSession();
//   //check the console of backend, you will get tokens here
//   console.log(session.token);
//   return {
//     props: {
//       user: 'bar',
//     },
//   };
// }
