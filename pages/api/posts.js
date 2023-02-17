import { prisma } from '../../server/db/client';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'POST':
      const {
        name,
        email,
        password1,
        password2,
        oib,
        phone,
        address,
        zip,
        country,
        city,
      } = req.body;

      // use prisma to create a new post using that data
      const post = await prisma.post.create({
        data: {
          name,
          email,
          password1,
          password2,
          oib,
          phone,
          address,
          zip,
          country,
          city,
        },
      });
      // send the post object back to the client
      res.status(201).json(post);
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export const getServerSideProps = withPageAuthRequired();
