import { authConfig } from '@/auth.config';
import { AdapterSession } from './../node_modules/next-auth/src/adapters';
import { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

async function getUser(email: string, password: string): Promise<any> {
    console.log('from get user email',email)
    return {
        id: 1,
        name: 'test user',
        email: email,
        password: password,
    };
}
export const authOptions: NextAuthOptions = {
    ...authConfig,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        Credentials({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' }
            },
            async authorize(credentials) {
                const user = await getUser(
                    credentials?.email as string,
                    credentials?.password as string
                );
                console.log("user" ,user)
                return user ?? null
            },
        }),
    ],
}
