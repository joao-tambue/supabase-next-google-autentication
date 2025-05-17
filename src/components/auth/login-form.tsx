import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import icon from "../../../public/icons/google.png";
import { useGoogleLogin } from "../../../hooks/use-Google-login";
import Image from "next/image";

export default function LoginForm() {
    const { hendleGoogleLogin } = useGoogleLogin();

    return (
        <Card className="max-w-sm w-full p-4">
            <CardHeader>
                <CardTitle className="text-xl">Bem vindo de volta</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                    Crie a sua conta e simplifique a gestão de suas viagens e excursões
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="mt-4 grid grid-cols-12 gap-4">
                    <div className="col-span-12">
                        <Button onClick={hendleGoogleLogin} variant="outline" className="cursor-pointer w-full">
                            <Image src={icon} alt="icon" width='16' height='16'  />
                            Google
                        </Button>
                    </div>
                </div>
            </ CardContent>
                
        </Card>
    );
}