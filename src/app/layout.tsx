import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-screen-lg mx-auto p-3">
          <div className="bg-white dark:bg-gray-900 dark:bg-opacity-90 bg-opacity-90 p-4 rounded-t-lg">
            <Navbar />
          </div>
          <div className="bg-green-600 dark:bg-green-900 h-2"></div>
          <div className="bg-white dark:bg-gray-900 p-4">
            {children}
          </div>
          <div className="bg-green-600 dark:bg-green-900 h-1"></div>
          <div className="bg-white dark:bg-gray-900 rounded-b-lg p-4">
            <Footer />
          </div>
        </div>   
      </body>
    </html>
  );
}
