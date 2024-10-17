import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				phone: { label: "Phone", type: "text" },
			},
			async authorize(credentials) {
				await dbConnect();

				const user = await User.findOne({ phone: credentials?.phone });

				if (!user || !credentials) {
					throw new Error("Invalid phone number");
				}

				return {
					id: user._id.toString(),
					phone: user.phone,
					name: user.name,
				};
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			await dbConnect();
			let currUser = await User.findOne({
				phone: token.phone ? token.phone : user?.phone,
			});

			token.userId = currUser?._id?.toString() || "";
			token.name = currUser.name || "";
			token.phone = currUser.phone || "";

			return token;
		},
		session({ session, token }) {
			if (!token) {
				return session;
			}

			session.user = {
				name: token.name as string,
				phone: token.phone as string,
			};

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
