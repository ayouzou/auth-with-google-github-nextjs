
import NextAuth from 'next-auth';

import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';

async function getUser(email: string, password: string): Promise<any> {
 return {
  id: 1,
  name: 'test user',
  email: email,
  password: password,
 };
}

export const {auth,signIn,signOut} = NextAuth({
 ...authConfig,
 providers: [
  Credentials({
   name: 'credentials',
   credentials: {
    email: { label: 'email', type: 'text' },
    password: { label: 'password', type: 'password' },
   },
   async authorize(credentials:any) {
    const user = await getUser(
     credentials.email as string,
     credentials.password as string
    );

    return user ?? null;
   },
  }),
 ],
});