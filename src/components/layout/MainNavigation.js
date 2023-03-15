import classes from './MainNavigation.module.css';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

function MainNavigation() {
  const { data: userSession, status } = useSession();

  function signoutOutHandler() {
    signOut({ callbackUrl: `${window.location.origin}/login` })
  }

  const authenticatedLinks = (
    <>
      <li>
        <Link href={`/user/${userSession?.user?.userId}/dashboard`}>Dashboard</Link>
      </li>
      <li>
        <Link href={`/user/${userSession?.user?.userId}/settings`}>Settings</Link>
      </li>
      <li>
        <button onClick={signoutOutHandler}>Logout</button>
      </li>
    </>
  );

  const unauthenticatedLinks = (
    <>
      <li>
        <Link href="/register">Registration</Link>
      </li>
      <li>
        <Link href="/login">Login</Link>
      </li>
    </>
  );

  return (
    <header className={classes.header}>
      <div className={classes.logo}>DYS Company</div>
      <nav>
        <ul>
          {userSession && authenticatedLinks}
          {!userSession && unauthenticatedLinks}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;