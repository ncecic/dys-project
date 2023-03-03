import classes from './MainNavigation.module.css';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

function MainNavigation() {
  const { data: session, status } = useSession()

  function signoutOutHandler() {
    signOut({callbackUrl: `${window.location.origin}/login`})
  }

  return (
    <header className={classes.header}>
      <div className={classes.logo}>DYS Company</div>
      <nav>
        <ul>
          {session && 
          <li>
            <Link href={`/user/${session.user.userId}/dashboard`}>Dashboard</Link>
          </li>}
          {session && 
          <li>
            <Link href={`/user/${session.user.userId}/settings`}>Settings</Link>
          </li> }

          {!session && 
          <li>
            <Link href="/register">Registration</Link>
          </li>}

          {!session && (
            <li>
              <Link href="/login">Login</Link>
            </li>
          )}
          {session && (
            <li>
              <button onClick={signoutOutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
