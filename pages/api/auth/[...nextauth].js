import NextAuth from 'next-auth';
import { PrismaClient } from '@prisma/client';
import CredentialsProvider from 'next-auth/providers/credentials';
let userAccount = null;

const prisma = new PrismaClient();

const bcrypt = require('bcrypt');

const confirmPasswordHash = (plainPassword, hashedPassword) => {
  return new Promise((resolve) => {
    bcrypt.compare(plainPassword, hashedPassword, function (err, res) {
      resolve(res);
    });
  });
};

const configuration = {
  //   cookie: {
  //     secure: process.env.NODE_ENV && process.env.NODE_ENV === 'production',
  // },
  redirect: false,
  session: {
    strategy: "jwt",
    // maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'credentials',
      credentials: {},
      async authorize(credentials) {
        try {
          const user = await prisma.users.findFirst({
            where: {
              email: credentials.email,
            },
          });

          if (user !== null) {
            //Compare the hash
            const res = await confirmPasswordHash(
              credentials.password,
              user.password
            );
            if (res === true) {
              userAccount = {
                userId: user.userId,
                email: user.email,
                oib: user.oib,
                name: user.name,
                phone: user.phone,
                address: user.address,
                zip: user.zip,
                country: user.country,
                city: user.city,
                isActive: user.isActive,
              };
              console.log('Authorize returning userAccount');
              return userAccount;
            } else {
              console.log('Hash not matched logging in');
              return null;
            }
          } else {
            console.log('Authorize returning null')
            return null;
          }
        } catch (err) {
          console.log('Authorize error:', err);
        }
      },
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      try {
        //the user object is wrapped in another user object so extract it
        user = user.user;
        // console.log('Sign in callback', user);
        // console.log('User id: ', user.userId);
        if (typeof user.userId !== typeof undefined) {
          if (user.isActive === '1') {
            console.log('User is active');
            return user;
          } else {
            console.log('User is not active');
            return false;
          }
        } else {
          console.log('User id was undefined');
          return false;
        }
      } catch (err) {
        console.error('Signin callback error:', err);
      }
    },
    async register(email, password) {
      try {
        await prisma.users.create({
          data: {
            email: email,
            password: password,
          },
        });
        return true;
      } catch (err) {
        console.error('Failed to register user. Error', err);
        return false;
      }
    },
    session: async ({session, token}) => {
      if (userAccount !== null) {
        session.user = {
          userId: userAccount.userId,
          name: userAccount.name,
          email: userAccount.email,
        };

      } else if (
        typeof token.user !== typeof undefined &&
        (typeof session.user === typeof undefined ||
          (typeof session.user !== typeof undefined &&
            typeof session.user.userId === typeof undefined))
      ) {
        session.user = token.user;

      } else if (typeof token !== typeof undefined) {
        session.token = token;

      }
      return Promise.resolve(session);
    },
    async jwt({token, user}) {
      console.log('JWT callback. Got User: ', user);
      if (typeof user !== typeof undefined) {
        token.user = user;
      }
      return Promise.resolve(token);
    },
  },
};
export default (req, res) => NextAuth(req, res, configuration);
