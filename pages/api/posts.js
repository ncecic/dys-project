import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;
  const { id, email, password, name, oib, phone, address, zip, country, city } =
    req.body;

  switch (method) {
    case 'POST':
      // use prisma to create a new user using that data
      const user = await prisma.users.create({
        data: {
          email,
          password,
          name,
          oib,
          phone,
          address,
          zip,
          country,
          city,
        },
      });
      // send the post object back to the client
      res.status(201).json(user);
      break;
    case 'PUT':
      // use prisma to update the user using that data
      const updateUser = await prisma.users.update({
        where: {
          id: id,
        },
        data: {
          email,
          name,
          oib,
          phone,
          address,
          zip,
          country,
          city,
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
