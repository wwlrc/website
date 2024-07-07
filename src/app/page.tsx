import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wye & Welsh LRC | Home",
};

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold mb-3">Home</h1>

      <p className="mb-2">Welcome to the Wye & Welsh Land Rover Club website!</p>

      <h2 className="text-xl font-bold">Wye & Welsh Challenge</h2>
      <p className="mb-2">Bookings for the Wye & Welsh Challenge are now open! Visit the link below for more information, and to book:</p>
      <a className="mb-2 underline text-blue" href="https://spanner.wwlrc.co.uk/rallies/r/22">https://spanner.wwlrc.co.uk/rallies/r/22</a>
    </main>
  );
}
