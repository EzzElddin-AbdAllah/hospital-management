"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { MantineProvider, createTheme } from "@mantine/core";
import { SessionProvider } from "next-auth/react";
import { Noto_Sans_Arabic } from "next/font/google";

import "./globals.css";

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  display: "fallback",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-sans-arabic",
});

const theme = createTheme({
  fontFamily: "var(--font-noto-sans-arabic), sans-serif",
  headings: { fontFamily: "var(--font-noto-sans-arabic), sans-serif" },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${notoSansArabic.variable} ${notoSansArabic.className}`}
    >
      <body className="flex flex-col min-h-screen">
        <SessionProvider>
          <MantineProvider theme={theme}>
            <Header />
            {children}
            <Footer />
          </MantineProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
