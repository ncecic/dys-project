import Layout from './layout/Layout';

function NotAuth() {
  return (
    <Layout>
      <iframe
        src="https://giphy.com/embed/owRSsSHHoVYFa"
        width="480"
        height="360"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
    </Layout>
  );
}

export default NotAuth;
