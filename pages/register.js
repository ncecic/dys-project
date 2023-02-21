import Layout from '@/components/layout/Layout';
import Card from '@/components/ui/Card';
import axios from 'axios';
import Registration from '../components/Registration';
import { useRouter } from 'next/router';
import bcrypt from 'bcryptjs';
import { useSession, signIn, signOut } from 'next-auth/react';

function Register() {
  const router = useRouter();

  async function updateRegistrationHandler(usrData) {
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

    //   signIn("credentials", {
    //     usrData.email, usrData.password, callbackUrl: `${window.location.origin}/dashboard`, redirect: false }
    // ).then(function(result) {
    //     router.push(result.url)
    // }).catch(err => {
    //     alert("Failed to register: " + err.toString())
    // });
      
      router.push('/login');
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
        />
      </Card>
    </Layout>
  );
}

export default Register;
