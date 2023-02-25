import Layout from '@/components/layout/Layout';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

function Homepage() {
  const { data: session } = useSession();
  console.log('Index session: ', session.user.userId);
  const router = new useRouter();
  if (session) {
    router.push(`/user/${session.user.userId}/dashboard`);
  } else {
    router.push('/login');
  }

  return (
    <Layout>
      <h1>Welcome</h1>
    </Layout>
  );
}

export default Homepage;
