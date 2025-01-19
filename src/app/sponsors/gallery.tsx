"use client";
import { Gallery, Image } from "react-grid-gallery";
import { ThumbnailImageProps } from "react-grid-gallery";
import NImage from "next/image";

 export default function SponsorGallery() {
    const images = [
        {
            src: "/sponsors/chrishillman.jpg",
            alt: "Chris Hillman",
        },
        {
            src: "/sponsors/abc.jpg",
            alt: "Abergavenny Brake & Clutch",
            href: "http://www.abcmotorfactors.com/",
        },
        {
            src: "/sponsors/cwbs.jpg",
            alt: "Caldicot Windows & Building Services",
            href: "mailto:chippyatwork78@gmail.com"
        },
        {
            src: "/sponsors/foundry4x4.jpg",
            alt: "Foundry 4x4",
            href: "https://foundry4x4.co.uk/"
        },
        {
            src: "/sponsors/muddyseries4x4.jpg",
            alt: "Muddy Series 4x4",
            href: "https://www.ebay.co.uk/str/seriesuser4x4"
        },
        {
            src: "/sponsors/whitecliff4x4.jpg",
            alt: "Whitecliff 4x4",
            href: "https://www.whitecliff4x4.co.uk/"
        }
    ]

    images.sort(() => Math.random() - 0.5)

    return (
        <main>TODO</main>
    )
}