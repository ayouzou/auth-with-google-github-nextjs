'use client'

import { useFormState } from "react-dom";
import Input from "./ui/Input";
import { login } from "@/lib/actions";
import { useActionState } from "react";

const loginInitialState = {
    message: '',
    errors: {
        email: '',
        password: '',
        credentials: '',
        unknown: '',
    },
};

const Form = () => {
    const [formState, formAction] = useActionState(login, loginInitialState);
    console.log('formState', formState)
    return (
        <form action={formAction} className="w-full max-w-sm p-6 bg-white shadow-lg rounded-lg border border-gray-200 flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-gray-800 text-center"> Login</h2>
            <p className="text-sm text-gray-600 text-center">
                Enter your credentials to access your account
            </p>
            <Input
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Input
                name="password"
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-2 rounded-lg hover:bg-zinc-800 transition duration-200"
            >
                Submit
            </button>
            <div className="text-center">
                <a
                    href="#"
                    className="text-sm text-blue-500 hover:underline"
                >
                    Forgot your password?
                </a>
            </div>
        </form>
    );
}

export default Form;
