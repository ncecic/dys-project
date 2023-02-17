import Layout from '@/components/layout/Layout';
import Card from '@/components/ui/Card';
import classes from './login.module.css';

function Login() {
  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <Layout>
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Login</label>
            <input type="email" required id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" required id="password" />
          </div>
          <div className={classes.actions}>
            <button>Register</button>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default Login;
