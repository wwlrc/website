"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LoginStatus from "./navbar/login";

const links = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/sponsors", label: "Sponsors" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-stone bg-white">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-6 px-4 py-3 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-ink"
        >
          <span className="relative h-14 w-14 shrink-0">
            <Image
              src="/logo.gif"
              alt="Wye & Welsh Land Rover Club badge"
              fill
              className="object-contain"
            />
          </span>
          <span
            className="whitespace-nowrap uppercase leading-tight tracking-wide text-blue-600 [-webkit-text-stroke:0.3px_black]"
            style={{
              fontFamily:
                '"Franklin Gothic Heavy", "Franklin Gothic Medium", var(--font-heading), Arial, sans-serif',
            }}
          >
            <span className="block text-xl">
              Wye &amp; Welsh
            </span>
            <span
              className="block text-base font-bold"
            >
              Land Rover Club
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "border-b-2 border-blue-600 pb-0.5 text-blue-700"
                    : "text-ink/70 hover:text-blue-700"
                }
              >
                {link.label}
              </Link>
            );
          })}
          <LoginStatus variant="desktop" />
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="flex h-11 w-11 items-center justify-center rounded border border-stone text-blue-700 md:hidden"
        >
          <span className="sr-only">Menu</span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M4 7h16" />
            <path d="M4 12h16" />
            <path d="M4 17h16" />
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-1 border-t border-stone px-4 py-3 text-sm font-semibold md:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded px-2 py-2 text-ink/70 hover:bg-gray-100"
            >
              {link.label}
            </Link>
          ))}
          <LoginStatus variant="mobile" />
        </nav>
      )}
    </header>
  );
}
