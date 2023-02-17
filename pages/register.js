import Layout from '@/components/layout/Layout';
import Card from '@/components/ui/Card';
import axios from 'axios';
import Registration from '../components/Registration';

function Register() {
  async function updateRegistrationHandler(usrData) {

    try {
      const { data } = await axios.post('api/posts', {
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
      <h1>Registration</h1>
      <Card>
        <Registration
          onRegister={updateRegistrationHandler}
          buttonText={'Register'}
        />
      </Card>
    </Layout>
  );
}

export default Register;

