import type { Metadata } from "next";
import SpannerBlog from "@/components/blog";
import { getPosts } from "@/spanner/blog";
import { wwlrcFacebookGroupLink } from "@/spanner/wwlrc";
import { FacebookIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Wye & Welsh LRC | Home",
};

export default async function Home() {
  // This is fine because we're statically exporting anyway
  let posts = await getPosts();

  return (
    <main>
      <h1 className="text-2xl font-bold">Home</h1>

      <p className="mb-2">
        Welcome to the Wye & Welsh Land Rover Club website!
      </p>
      <p className="mb-2">
        Take a look around our website to find out more about the club, see what
        events are coming up, and how you can get involved involved; we’ve got a
        Facebook group too!
      </p>

      <p className="mb-4">
        <a
          href={wwlrcFacebookGroupLink}
          target="_blank"
          className="inline-flex items-center w-128 px-2 py-2 pr-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-medium"
        >
          <FacebookIcon className="mr-2" />
          Join our Facebook group
        </a>
      </p>

      <h2 className="text-xl font-bold mt-2">Latest News</h2>

      <div className="mt-2">
        <SpannerBlog staticPosts={posts} />
      </div>
    </main>
  );
}
