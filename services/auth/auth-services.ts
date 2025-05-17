import { GoogleLogin } from "../../types/auth";
import { createClient } from '../../utils/supabase/client';

export class AuthService {
    async loginwithGoogle(): Promise<GoogleLogin> {
        const supabase = await createClient();
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: `${process.env.NEXT_PUBLIC_URL}/auth/callback?next-/app`,
            },
        });	

        if (error) {
            throw new Error( ` Erro ao logar com Google ` );
        }

        return {
            success: true,
            url: data.url,
        };
            
    }
}
