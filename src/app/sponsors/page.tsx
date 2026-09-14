import { Metadata } from "next";
import SponsorGallery from "./gallery";

export const metadata: Metadata = {
  title: "Wye & Welsh LRC | Sponsors",
};

export default function Sponsors() {
  return (
    <main className="mx-auto max-w-screen-xl px-4 py-10 text-ink/80 sm:px-8 sm:py-14">
      <h1 className="font-heading mb-4 text-3xl font-semibold text-blue-950">Sponsors</h1>

      <SponsorGallery />
    </main>
  );
}
