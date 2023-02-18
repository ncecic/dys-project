import classes from './MainNavigation.module.css';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

function MainNavigation() {
  const { data: session } = useSession();

  const user = session?.user;

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
              <button onClick={signIn}>Login</button>
            </li>
          )}
          {user && (
            <li>
              <button onClick={signOut}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
