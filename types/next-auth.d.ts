import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    phone: string & DefaultSession["user"];
    role: string & DefaultSession["user"];
  }
}

declare module "next-auth" {
  interface Session {
    user: {
      phone: string;
      role: string;
    } & DefaultSession["user"];
  }
}
