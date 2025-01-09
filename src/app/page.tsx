import type { Metadata } from "next";
import SpannerBlog from "../components/spanner_blog"

export const metadata: Metadata = {
  title: "Wye & Welsh LRC | Home",
};

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold">Home</h1>

      <p className="mb-2">Welcome to the Wye & Welsh Land Rover Club website!</p>

      <h2 className="text-xl font-bold mt-2">Latest News</h2>
      
      <SpannerBlog />
    </main>
  );
}
