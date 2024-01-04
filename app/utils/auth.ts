import type { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./db";

export const authOptions = {
    adapter: PrismaAdapter(prisma), 
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string
        }),
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST as string,
                port: Number(process.env.EMAIL_SERVER_PORT),
                auth: {
                    user: process.env.EMAIL_SERVER_USER as string,
                    pass: process.env.EMAIL_SERVER_PASSWORD as string
                }
            },
            from: process.env.EMAIL_FROM
        })
    ]
} satisfies NextAuthOptions;