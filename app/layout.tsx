"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { MantineProvider } from "@mantine/core";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "fallback",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${inter.className}`}>
      <body className="flex min-h-screen flex-col">
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
