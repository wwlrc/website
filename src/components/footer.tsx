"use client";
import Link from "next/link";
import { use, useEffect, useState } from "react";

export default function Footer() {

    const sponsors = [
        "Chris Hillman",
        "Caldicot Windows & Building Services",
        "Abergavenny Brake & Clutch",
        "Foundry 4x4",
        "Muddy Series 4X4 Parts",
        "Whitecliff 4X4"
    ];
    
    const [sponsorIndex, setSponsorIndex] = useState(-1)

    useEffect(() => {
        setSponsorIndex(Math.floor(Math.random() * sponsors.length))

        const intervalId = setInterval(() => {
            sponsorIndex < sponsors.length - 1 ? setSponsorIndex(sponsorIndex + 1) : setSponsorIndex(0)
        }, 5000)

        return () => clearInterval(intervalId); 
    }, [])

    return (
        <main>
            <p className="mb-2">
                <Link href="/sponsors">Sponsored by {sponsorIndex == -1 ? "Loading..." : sponsors[sponsorIndex]}</Link>
            </p>
            <p>
                <a href="https://wwlrc.co.uk/">&copy; {new Date().getFullYear()} Wye & Welsh Land Rover Club</a>
            </p>
            
        </main>
    )
}