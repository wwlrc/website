"use client";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";

type Sponsor = {
  src: string;
  alt: string;
  href: string | null;
};

let sponsors: Sponsor[] = [
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
    src: "/sponsors/muddyseries4x4.jpg",
    alt: "Muddy Series 4x4",
    href: "https://www.ebay.co.uk/str/seriesuser4x4",
  },
  {
    src: "/sponsors/whitecliff4x4.jpg",
    alt: "Whitecliff 4x4",
    href: "https://www.whitecliff4x4.co.uk/",
  },
  {
    src: "/sponsors/lewis-thomas-spares.png",
    alt: "Lewis Thomas Spares",
    href: "tel:+44 7876 826194",
  },
  {
    src: "/sponsors/wye-valley-carpet-and-upholstery-cleaners.png",
    alt: "Wye Valley Carpet and Upholstery Cleaners",
    href: "mailto:wyevalleycarpetcleaners@gmail.com",
  },
  {
    src: "/sponsors/amorgan-property-maintenance.png",
    alt: "A.Morgan Property Maintenance",
    href: "tel:+44 1495 215381",
  },
  {
    src: "/sponsors/ak-inspection-services.jpg",
    alt: "AK Inspection Services",
    href: "tel:+44 7765 196119",
  },
].sort(() => Math.random() - 0.5);

export default function SponsorGallery() {
  const [images, setImages] = useState<Sponsor[]>([]);

  useEffect(() => {
    (async () => setImages(sponsors))();
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
        {images.map((image, id) => (
          <div key={id} className="col-span-1 text-center">
            <h2 className="font-bold mb-2 mt-4">{image.alt}</h2>
            {img(image)}
          </div>
        ))}
      </div>
    </main>
  );
}
