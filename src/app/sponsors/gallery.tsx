"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Sponsor = {
  src: string;
  alt: string;
  href: string | null;
};

export default function SponsorGallery() {
  const [images, setImages] = useState<Sponsor[]>([]);

  useEffect(() => {
    let images: Sponsor[] = [
      {
        src: "/sponsors/abc.jpg",
        alt: "Abergavenny Brake & Clutch",
        href: "http://www.abcmotorfactors.com/",
      },
      {
        src: "/sponsors/cwbs.jpg",
        alt: "Caldicot Windows & Building Services",
        href: "mailto:chippyatwork78@gmail.com",
      },
      {
        src: "/sponsors/foundry4x4.jpg",
        alt: "Foundry 4x4",
        href: "https://foundry4x4.co.uk/",
      },
      {
        src: "/sponsors/muddyseries4x4.jpg",
        alt: "Muddy Series 4x4",
        href: "https://www.ebay.co.uk/str/seriesuser4x4",
      },
      {
        src: "/sponsors/whitecliff4x4.jpg",
        alt: "Whitecliff 4x4",
        href: "https://www.whitecliff4x4.co.uk/",
      },
    ];

    images = images.sort(() => Math.random() - 0.5);
    setImages(images);
  }, []);

  if (images.length == 0) {
    return (
      <main>
        <div className="h-dvh">Loading...</div>
      </main>
    );
  }

  const img = (image: Sponsor) => {
    let result = (
      <Image
        src={image.src}
        width={0}
        height={0}
        className="w-full"
        alt={image.alt}
        fill={false}
      />
    );

    if (image.href !== null) {
      result = (
        <a href={image.href} target="_blank">
          {result}
        </a>
      );
    }

    return result;
  };

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {images.map((image, id) => (
          <div key={id} className="col-span-1">
            <h2 className="font-bold">{image.alt}</h2>
            {img(image)}
          </div>
        ))}
      </div>
    </main>
  );
}
