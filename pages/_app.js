import Layout from '@/components/layout/Layout';
import AuthContext from '@/context/auth-context';
import '@/styles/globals.css';
import { getToken } from 'next-auth/jwt';
import { getCsrfToken, getSession, SessionProvider, useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {

  return (
    <AuthContext.Provider value={
      {userSession: false}
    }>
      <SessionProvider
        options={{ clientMaxAge: 0 }}
        session={pageProps.session}
      >
        <Component {...pageProps} />
      </SessionProvider>
    </AuthContext.Provider>
  );
}
