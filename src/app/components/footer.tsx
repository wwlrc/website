"use client";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
    const sponsors = [
        "Chris Hillman",
        "Caldicot Windows & Building Services",
        "Abergavenny Brake & Clutch",
        "Foundry 4x4",
        "Muddy Series 4X4 Parts",
        "Whitecliff 4X4"
    ];
    
    const [sponsorIndex, setSponsorIndex] = useState(Math.floor(Math.random() * sponsors.length))

    setInterval(() => {
        sponsorIndex < sponsors.length - 1 ? setSponsorIndex(sponsorIndex + 1) : setSponsorIndex(0)
    }, 5000)

    return (
        <main>
            <p className="mb-2">
                <Link href="/sponsors">Sponsored by {sponsors[sponsorIndex]}</Link>
            </p>
            <p>
                <a href="https://wwlrc.co.uk/">&copy; {new Date().getFullYear()} Wye & Welsh Land Rover Club</a>
            </p>
            
        </main>
    )
}