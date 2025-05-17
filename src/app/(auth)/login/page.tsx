'use client'

import LoginForm from "@/components/auth/login-form";

export default function Login() {

    return (
        <div className="flex h-screen w-full">
            <div className="w-1/2 flex items-center justify-center">
                <LoginForm />
            </div>
            <div className="w-1/2 bg-primary-foreground"></div>
        </div>
    );
    }