import Layout from '@/components/layout/Layout';
import SettingsUpdate from '@/components/SettingsUpdate';
import Card from '@/components/ui/Card';
import { prisma } from '@/server/db/client';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';


function Settings({ user }) {
  const router = new useRouter();
  const { data: session } = useSession();

  if (!session) {
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
