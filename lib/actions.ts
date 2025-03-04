'use server'

import AuthError from 'next-auth';
import { loginSchema } from '@/types/schema';
import { signIn, signOut } from '@/app/api/auth/[...nextauth]/route';
// import { signIn, signOut } from '@/auth';

const defaultValues = {
    email: '',
    password: '',
};

export async function login(prevState: any, formData: FormData) {
    try {
        const email = formData.get('email');
        const password = formData.get('password');
        const validatedFields = loginSchema.safeParse({
            email: email,
            password: password,
        });

        if (!validatedFields.success) {
            return {
                message: 'validation error',
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }
        console.log('email', email)
        console.log('password', password)
        await signIn('credentials', formData);
        return {
            message: 'success',
            errors: {},
        };



    } catch (error) {
        if (error instanceof AuthError) {
            switch (error) {
                case 'CredentialsSignin':
                    return {
                        message: 'credentials error',
                        errors: {
                            ...defaultValues,
                            credentials: 'incorrect email or password',
                        },
                    };
                default:
                    return {
                        message: 'unknown error',
                        errors: {
                            ...defaultValues,
                            unknown: 'unknown error',
                        },
                    };
            }
        }
        throw error;
    }
}

export async function logout() {
    await signOut();
}