"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Sponsor, sponsors } from "./data";

function shuffled(items: Sponsor[]): Sponsor[] {
  const out = [...items];

  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }

  return out;
}

export default function SponsorGallery() {
  const [images, setImages] = useState<Sponsor[]>(sponsors);

  // Shuffling during the render would give the prerender and the client
  // different orders, so it happens once the markup is already hydrated.
  useEffect(() => setImages(shuffled(sponsors)), []);

  const img = (image: Sponsor) => {
    let result = (
      <Image
        src={image.src}
        width={0}
        height={0}
        className="w-11/12 m-auto"
        alt={image.alt}
        fill={false}
      />
    );

    if (image.href !== null) {
      result = (
        <a href={image.href} target="_blank" className="">
          {result}
        </a>
      );
    }

    return result;
  };

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {images.map((image) => (
          <div key={image.src} className="col-span-1 text-center">
            <h2 className="font-bold mb-2 mt-4">{image.alt}</h2>
            {img(image)}
          </div>
        ))}
      </div>
    </main>
  );
}
