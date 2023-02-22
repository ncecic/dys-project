import { useRouter } from 'next/router';

function Homepage() {
  const router = useRouter();
  router.push('/login');
  
  return <></>;
}

export default Homepage;
