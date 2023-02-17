import classes from './MainNavigation.module.css';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';

function MainNavigation() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  console.log(user)

  return (
    <header className={classes.header}>
      <div className={classes.logo}>DYS Company</div>
      <nav>
        <ul>
          <li>
            <Link href="/user/dashboard/">Dashboard</Link>
          </li>

          <li>
            <Link href="/user/settings">Settings</Link>
          </li>
          <li>
            <Link href="/register">Registration</Link>
          </li>
          {!user && (
            <li>
              <Link href="/api/auth/login">Login</Link>
            </li>
          )}
          {user && (
            <li>
              <Link href="/api/auth/logout">Logout</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
