import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SigninWithGithub from "../components/SigninWithGithub";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import LoginForm from "../components/LoginForm";

export default async function AuthPage() {
    const session = await getServerSession(authOptions);
    if (session) {
        redirect('/');
    }
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <Card>
                <CardHeader>
                    <CardTitle>Please sign in</CardTitle>
                    <CardDescription>To access private page you have to be authenticated</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col">
                        <LoginForm />
                        <SigninWithGithub />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}