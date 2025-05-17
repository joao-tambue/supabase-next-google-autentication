'use client';

import { useRouter } from "next/navigation";
import { loginwithGoogle } from "../actions/auth/auth-actions";

export function useGoogleLogin () {
    const router = useRouter();

    const hendleGoogleLogin = async () => {
        const response = await loginwithGoogle();

        if (response.success && response.url) {
            // Redirect to the home page
            router.push(response.url);
        } else {
            // Handle the error
            console.error(response.message);
            alert('Não foi possível fazer login com o Google. Tente novamente.');
        }
    }

    return {
        hendleGoogleLogin
    }
}