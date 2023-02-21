import Layout from '@/components/layout/Layout';
import Context from '@/context/context';
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider options={{ clientMaxAge: 0 }} session={pageProps.session}>
      <Context>
        <Component {...pageProps} />
      </Context>
    </SessionProvider>
  );
}
