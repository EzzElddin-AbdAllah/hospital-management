import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        identifier: { label: "Phone or Username", type: "text" },
        password: { label: "Password", type: "password", required: false },
      },
      async authorize(credentials) {
        await dbConnect();

        const { identifier, password } = credentials || {};

        let user;

        if (/^\d+$/.test(identifier!)) {
          user = await User.findOne({ phone: identifier });

          if (!user) {
            throw new Error("Invalid phone number");
          }
        } else {
          user = await User.findOne({ name: identifier, role: "admin" });

          if (!user) {
            throw new Error("Invalid username");
          }

          const isPasswordValid = await bcrypt.compare(
            password!,
            user.password,
          );
          if (!isPasswordValid) {
            throw new Error("Invalid password");
          }
        }

        return {
          id: user._id.toString(),
          name: user.name,
          phone: user.phone || "",
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.id;
        token.name = user.name;
        token.phone = user.phone;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          name: token.name as string,
          phone: token.phone as string,
          role: token.role as string,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/res",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
