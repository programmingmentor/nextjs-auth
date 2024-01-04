"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginForm() {
    const [email, setEmail] = useState<null | string>(null);
    async function signInWithEmail() {
        const signInResult = await signIn('email', {
            email: email,
            callbackUrl: `${window.location.origin}`,
            redirect: false
        });

        if (!signInResult?.ok) {
            return toast({
                title: "Error",
                description: "Something went wrong",
                variant: "destructive"
            })
        }

        return toast({
            title: "Success",
            description: "Check your email for the link to sign in",
        })
    }

    return (
        <form action={signInWithEmail}>
            <div className="flex flex-col gap-y-2">
                <Label>Email</Label>
                <Input type="email" onChange={(e) => setEmail(e.target.value)} name="email" placeholder="email@example.com" />
            </div>
            <Button type="submit" className="mt-4 w-full">Log In with email</Button>
        </form>
    )
}