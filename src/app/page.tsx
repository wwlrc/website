import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SpannerBlog from "@/components/blog";
import { getPosts } from "@/spanner/blog";

export const metadata: Metadata = {
  title: "Wye & Welsh LRC | Home",
};

export default async function Home() {
  // This is fine because we're statically exporting anyway
  let posts = await getPosts();

  return (
    <>
      <section className="relative flex min-h-[500px] flex-col justify-end overflow-hidden sm:min-h-[380px]">
        <Image
          src="/background.jpg"
          alt="Land Rovers lined up at the top of a muddy trials course"
          fill
          priority
          className="object-cover object-[center_10%]"
        />
        <div
          className="absolute inset-0 sm:hidden"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(3,26,37,0.92) 0, rgba(3,26,37,0.92) 340px, rgba(3,26,37,0) 440px)",
          }}
        />
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(3,26,37,0) 0%, rgba(3,26,37,0) 42%, rgba(3,26,37,0.58) 62%, rgba(3,26,37,0.9) 100%)",
          }}
        />
        <div className="relative mx-auto flex w-full max-w-screen-xl flex-col gap-6 px-4 pb-8 sm:flex-row sm:items-end sm:justify-between sm:px-8">
          <div className="flex flex-col gap-2.5">
            <h1 className="font-heading max-w-2xl text-2xl font-bold leading-tight text-white sm:text-[30px]">
              Welcome to the Wye &amp; Welsh Land Rover Club
            </h1>
            <p className="max-w-[66ch] text-lg leading-relaxed text-white/90">
              We&rsquo;re a friendly club of Land Rover off-road enthusiasts
              from the Wye Valley, the Forest of Dean and South Wales,
              running trials and social events throughout the year. Take a
              look around to see what we&rsquo;re about!
            </p>
          </div>
          <Link
            href="/events"
            className="inline-flex h-[52px] items-center gap-2 whitespace-nowrap rounded bg-blue-700 px-6 font-semibold text-white hover:bg-blue-800"
          >
            See upcoming events
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-screen-xl px-4 py-11 sm:px-8 sm:py-14">
        <h2 className="font-heading mb-5 text-2xl font-semibold text-blue-950 sm:text-[28px]">
          Latest news
        </h2>
        <SpannerBlog staticPosts={posts} />
      </section>
    </>
  );
}
