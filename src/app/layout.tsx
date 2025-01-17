import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wye & Welsh LRC",
  description: "Welcome to the Wye & Welsh Land Rover Club website. Visit this website to see the latest news, events and photos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preload" as="image" href="background.jpg"></link>
      </Head>
      <body className={inter.className}>
        <div className="max-w-screen-lg mx-auto p-3">
          <div className="bg-white dark:bg-gray-900 dark:bg-opacity-90 bg-opacity-90 p-4 rounded-t-lg">
            <Navbar />
          </div>
          <div className="bg-green-600 dark:bg-green-900 h-0.5"></div>
          <div className="bg-white dark:bg-gray-900 p-4">
            {children}
          </div>
          <div className="bg-gray-400 dark:bg-gray-700 h-0.5"></div>
          <div className="bg-white dark:bg-gray-900 rounded-b-lg p-4">
            <Footer />
          </div>
        </div>   
      </body>
    </html>
  );
}
