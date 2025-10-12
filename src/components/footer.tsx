"use client";
import Link from "next/link";
import { use, useEffect, useState, useCallback, useMemo } from "react";

export default function Footer() {
  const sponsors = useMemo(() => {
    return [
      "Caldicot Windows & Building Services",
      "Abergavenny Brake & Clutch",
      "Muddy Series 4X4 Parts",
      "Whitecliff 4X4",
      "AK Inspection Services Ltd",
      "A.Morgan Property Maintenance",
      "Wye Valley Carpet & Upholstery Cleaners",
      "Lewis Thomas Spares",
    ];
  }, []);

  const [sponsorIndex, setSponsorIndex] = useState(-1);

  const switchSponsor = useCallback(() => {
    let index = Math.floor(Math.random() * sponsors.length);

    setSponsorIndex(index);
  }, [sponsors]);

  useEffect(() => {
    switchSponsor();

    const intervalId = setInterval(() => {
      switchSponsor();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [switchSponsor]);

  return (
    <main>
      <p className="mb-2">
        <Link href="/sponsors">
          Sponsored by{" "}
          {sponsorIndex == -1 ? "Loading..." : sponsors[sponsorIndex]}
        </Link>
      </p>
      <p>
        <a href="https://wwlrc.co.uk/">
          &copy; {new Date().getFullYear()} Wye & Welsh Land Rover Club
        </a>
      </p>
    </main>
  );
}
