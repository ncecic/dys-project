import Layout from '@/components/layout/Layout';
import SettingsUpdate from '@/components/SettingsUpdate';
import Card from '@/components/ui/Card';
import { prisma } from '../../server/db/client';
import axios from 'axios';

function Settings({user}) {

  async function updateSettingsHandler(usrData) {
    try {
      await axios.put('http://localhost:3000/api/posts', {
        id: user.id,
        email: usrData.email,
        password: usrData.password,
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

export async function getServerSideProps() {
  
  const user = await prisma.users.findFirst({
    where: {
      email: 'test@test.hr',
    },
  });
  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
    },
  };
}
