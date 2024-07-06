import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wye & Welsh LRC | Home",
};

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold mb-3">Home</h1>

      <p>Welcome to the Wye & Welsh Land Rover Club website!</p>
    </main>
  );
}
