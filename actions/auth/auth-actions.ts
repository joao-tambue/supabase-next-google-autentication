'use service';

import {AuthService} from '../../services/auth/auth-services';
import { GoogleLogin } from '../../types/auth';

const authService = new AuthService ();

export async function loginwithGoogle(): Promise<GoogleLogin> {
    try {

        const response = await authService.loginwithGoogle();

        return response;
        
    } catch (error: any) {
        return {
            success: false,
            message: error.message
        }
    }
    
};
