import Layout from '@/src/components/layout/Layout';
import Card from '@/src/components/ui/Card';
import SettingsUpdate from '@/src/components/SettingsUpdate';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { prisma } from '@/src/server/db/client';


function Settings({ user }) {
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
      router.push('/')
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
  const user = await prisma.user.findFirst({
    where: {
      id: parseInt(ctx.params.userId),
    },
    include: {
      profile: true
    }
  });
  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
    },
  };
}
