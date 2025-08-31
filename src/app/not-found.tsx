import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wye & Welsh LRC | Page Not Found",
};

export default function NotFound() {
  return (
    <main>
      <h1 className="text-2xl font-bold mb-3">Page Not Found</h1>
      <p className="mb-4">The requested page could not be found :/</p>
      <Image src="/404.webp" alt="404" width={500} height={500} />
    </main>
  );
}
