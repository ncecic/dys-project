import Layout from '@/components/layout/Layout';
import SettingsUpdate from '@/components/SettingsUpdate';
import Card from '@/components/ui/Card';

function Settings( { user }) {
  async function updateSettingsHandler(usrData) {
    try {
        await axios.post('api/posts', {
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
      console.log(error.response.data);
    }
  }

  return (
    <Layout>
      <h1>Settings</h1>
      <Card>
        <SettingsUpdate onUpdateSettings = {updateSettingsHandler} activeUser={user}/>
      </Card>
    </Layout>
  );
}

export default Settings;

export async function getServerSideProps() {
  const posts = await prisma.post.findUnique({
    where: {
      oib: 48187781011
    }
  });

  return {
    props: {
      user,
    },
  };
}