import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;
  const { id, email, password, name, oib, phone, address, zip, country, city } =
    req.body;

  switch (method) {
    case 'POST':
      try {
        // use prisma to create a new user using that data
        const user = await prisma.user.create({
          data: {
            email,
            password,
            profile: {
              create: {
                name,
                oib,
                phone,
                address,
                zip,
                country,
                city,
              },
            },
          },
        });
        // send the post object back to the client
        res.status(201).json(user);
      } catch (error) {
        console.log('Error api/posts:', error.message);
        res.status(520).json(error.message);
      }
      break;
    case 'PUT':
      // use prisma to update the user using that data
      const updateUser = await prisma.user.update({
        where: {
          id: parseInt(id),
        },
        data: {
          email,
          password,
          profile: {
            update: {
              name,
              oib,
              phone,
              address,
              zip,
              country,
              city,
            },
          },
        },
      });
      // send the post object back to the client
      res.status(201).json(updateUser);
      break;
    default:
      res.setHeader('Allow', ['POST', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
