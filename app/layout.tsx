"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { SessionProvider } from "next-auth/react";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
	subsets: ["latin"],
	display: "swap",
	weight: ["100", "300", "400", "500", "700", "900"],
	variable: "--font-roboto",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${inter.className} ${roboto.className}`}>
			<head>
				<ColorSchemeScript />
			</head>
			<body className="flex flex-col min-h-screen">
				<SessionProvider>
					<MantineProvider>
						<Header />
						{children}
						<Footer />
					</MantineProvider>
				</SessionProvider>
			</body>
		</html>
	);
}
