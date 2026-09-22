import Link from "next/link";
import Image from "next/image";
import { FacebookIcon } from "lucide-react";
import { wwlrcFacebookGroupLink } from "@/spanner/wwlrc";
import { sponsors } from "@/app/sponsors/data";

const exploreLinks = [
  { href: "/about", label: "About the club" },
  { href: "/events", label: "Events calendar" },
  { href: "/join", label: "Join us" },
  { href: "/sponsors", label: "Our sponsors" },
];

export default function Footer() {
  return (
    <footer className="bg-blue-900 px-4 py-10 text-[#c3d5de] sm:px-8 sm:py-12">
      <div className="mx-auto grid max-w-screen-xl gap-10 sm:grid-cols-3">
        <div className="flex flex-col items-start gap-3.5">
          <div className="flex items-center gap-3">
            <span className="relative h-10 w-10 shrink-0">
              <Image
                src="/logo.gif"
                alt="Wye & Welsh Land Rover Club badge"
                fill
                className="object-contain"
              />
            </span>
            <span
              className="uppercase leading-tight tracking-wide text-white"
              style={{
                fontFamily:
                  '"Franklin Gothic Heavy", "Franklin Gothic Medium", var(--font-heading), Arial, sans-serif',
              }}
            >
              <span className="block text-xl">Wye &amp; Welsh</span>
              <span className="block text-base font-bold">
                Land Rover Club
              </span>
            </span>
          </div>
          <p className="text-[15px] leading-relaxed text-[#8fa8b5]">
            Founded July 1987. Twice hosts of the ALRC National Rally, in 2013
            and 2023.
          </p>
          <a
            href={wwlrcFacebookGroupLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#c3d5de] hover:text-white hover:underline"
          >
            <FacebookIcon className="h-[17px] w-[17px] text-blue-600" />
            Facebook group
          </a>
        </div>

        <div className="flex flex-col gap-2.5 text-[15px]">
          <span className="mb-1 font-semibold text-white">Explore</span>
          {exploreLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#8fa8b5] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://spanner.wwlrc.co.uk/account/sign-in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8fa8b5] hover:text-white"
          >
            Members&rsquo; login
          </a>
        </div>

        <div className="flex flex-col gap-2.5 text-[15px]">
          <span className="mb-1 font-semibold text-white">
            With thanks to our sponsors
          </span>
          <span className="leading-loose text-[#8fa8b5]">
            {sponsors.map((s) => s.alt).join(" · ")}
          </span>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-screen-xl border-t border-white/15 pt-5 text-sm text-[#7e97a5]">
        &copy; {new Date().getFullYear()} Wye &amp; Welsh Land Rover Club
      </div>
    </footer>
  );
}
