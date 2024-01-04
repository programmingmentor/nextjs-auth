"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";

export default function SigninWithGithub() {
  return (
    <Button onClick={() => signIn('github', {
        callbackUrl: `${window.location.origin}`
    })} variant={"secondary"} className="mt-4">Log In with Github <Github/></Button>
  )
}