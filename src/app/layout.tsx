import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head"; // Import Head
//Components
import Menu from "@/components/layout/menu/Menu";
import CoverImg from "@/components/layout/cover/CoverImg";
import Footer from "@/components/layout/footer/Footer";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PTS",
  description: "PTS website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/icon.jpg" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Menu />
        <CoverImg />
        {children}
        <Footer />
      </body>
    </html>
  );
}
