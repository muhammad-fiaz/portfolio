import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development'
};

const handler = (req: NextApiRequest, res: NextApiResponse<any>) =>
  NextAuth(req, res, authOptions);

export default handler;
