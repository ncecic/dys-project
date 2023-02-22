import React from 'react';
import Card from '@/components/ui/Card';
import { useSession } from 'next-auth/react';
import Layout from '../components/layout/Layout';
import classes from './index.module.css';

function Homepage() {
  const session = useSession();
  const router = React.router;
  console.log(session);

  if (!session.data.user.name) {
    router.push('/login');
    return <h1>Error</h1>
  } else {
    return (
      <Layout>
        <Card>
          <div className={classes.detail}>
            {session && <h1>Welcome {session.data.user.name}</h1>}
          </div>
        </Card>
      </Layout>
    );
  }
}

export default Homepage;
