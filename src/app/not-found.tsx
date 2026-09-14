import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wye & Welsh LRC | Page Not Found",
};

export default function NotFound() {
  return (
    <main className="mx-auto max-w-screen-xl px-4 py-10 text-ink/80 sm:px-8 sm:py-14">
      <h1 className="font-heading mb-4 text-3xl font-semibold text-blue-950">Page Not Found</h1>
      <p className="mb-4">The requested page could not be found :/</p>
      <Image src="/404.webp" alt="404" width={500} height={500} />
    </main>
  );
}
