import type { Metadata } from "next";
import SpannerBlog from "@/components/blog";
import { getPosts } from "@/spanner/blog";

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

      <h2 className="text-xl font-bold mt-2">Latest News</h2>

      <div className="mt-2">
        <SpannerBlog staticPosts={posts} />
      </div>
    </main>
  );
}
