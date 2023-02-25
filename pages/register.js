import Layout from '@/components/layout/Layout';
import Card from '@/components/ui/Card';
import axios from 'axios';
import Registration from '../components/Registration';
import { useRouter } from 'next/router';
import bcrypt from 'bcryptjs';
import { useState } from 'react';

function Register() {
  const router = useRouter();

  const [isError, setIsError] = useState(false);

  async function registrationHandler(usrData) {
    const hashedPsw = bcrypt.hashSync(usrData.password, bcrypt.genSaltSync());
    try {
      const { data } = await axios.post('api/posts', {
        email: usrData.email,
        password: hashedPsw,
        name: usrData.name,
        oib: usrData.oib,
        phone: usrData.phone,
        address: usrData.address,
        zip: parseInt(usrData.zip),
        country: usrData.country,
        city: usrData.city,
      });
      setIsError(false);
      router.push('/login');
    } catch (error) {
      console.log('Register error: ', error.response.status);
      console.log(error.response.data);

      if (error.response.status === 520) {
        setIsError(true);
      }
    }
  }

  return (
    <Layout>
      {isError && alert('This email is alreday registered')}
      <h1>Registration</h1>
      <Card>
        <Registration onRegister={registrationHandler} />
      </Card>
    </Layout>
  );
}

export default Register;
