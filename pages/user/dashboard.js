import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Layout from '@/components/layout/Layout';
import CompanyData from '../../components/CompanyData';

const DUMMY_COMPANY = {
  email: 'test@mail.com',
  password: 'password',
  name: 'Nikola d.o.o.',
  oib: '48187781011',
  phone: '0959124860',
  address: 'Dubrovacka 21',
  zip: '2100',
  country: 'Croatia',
  city: 'Split',
};

function Dashboard() {
  return <Layout><CompanyData company={DUMMY_COMPANY} /></Layout>;
}

export default Dashboard;

export const getServerSideProps = withPageAuthRequired();