// import  {NextAuthConfig}  from 'next-auth';

export const authConfig: any = {
    session: {
        strategy: 'jwt',
    },
    pages: {
        error: '/',
        signIn: '/',
        signOut: '/',
    },
    callbacks: {
        authorized({ auth }: { auth: any }) {
            const isAuthenticated = !!auth?.user;

            return isAuthenticated;
        },
    },
    providers: [],
} 