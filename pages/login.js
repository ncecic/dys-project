import Layout from '@/components/layout/Layout';
import Card from '@/components/ui/Card';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import classes from './login.module.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const router = new useRouter();

  function submitHandler(event) {
    event.preventDefault();

    signIn('credentials', {
      email,
      password,
      callbackUrl: `${window.location.origin}/`,
      redirect: false,
    }).then(function (result) {
      if (result.error !== null) {
        if (result.status === 401) {
          setLoginError(
            'Your username/password combination was incorrect. Please try again'
          );
        } else {
          setLoginError(result.error);
        }
      } else {
        router.push(result.url);
      }
    });
  }

  return (
    <Layout>
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Login</label>
            <input type="email" required id="email" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" required id="password" onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className={classes.actions}>
            <button>Login</button>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default Login;
