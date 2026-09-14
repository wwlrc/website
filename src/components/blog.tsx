"use client";

import { useEffect, useRef, useState } from "react";
import { getPosts } from "@/spanner/blog";

const CLAMP_HEIGHT = 132;

function NewsPost({ post }: { post: any }) {
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) setOverflows(el.scrollHeight > CLAMP_HEIGHT + 4);
  }, [post.content]);

  return (
    <article className="flex flex-col gap-2 rounded-lg bg-white px-5 py-6 sm:px-6">
      <h3 className="font-heading text-xl font-semibold leading-snug text-ink sm:text-[23px]">
        {post.title}
      </h3>
      <span className="text-sm text-ink/60">
        {new Date(post.created_at).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
        {" — "}
        {post.author}
      </span>
      <div
        ref={bodyRef}
        className="relative mt-1 overflow-hidden text-[17px] leading-relaxed text-ink/80"
        style={{ maxHeight: expanded ? undefined : CLAMP_HEIGHT }}
      >
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        {!expanded && overflows && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[52px] bg-gradient-to-b from-white/0 to-white" />
        )}
      </div>
      {overflows && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-1 inline-flex w-fit items-center gap-1 text-sm font-semibold text-blue-700 hover:underline"
        >
          {expanded ? "Show less" : "Read the rest"}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            style={{ transform: expanded ? "rotate(180deg)" : undefined }}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      )}
    </article>
  );
}

export default function SpannerBlog({ staticPosts }: any) {
  const [posts, setPosts] = useState(staticPosts);

  const updatePosts = () => {
    getPosts().then((posts) => {
      setPosts(posts);
    });
  };

  useEffect(() => {
    updatePosts();

    const intervalId = setInterval(() => {
      updatePosts();
    }, 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (posts.length == 0)
    return (
      <p className="text-ink/70">
        <i>Looks like there&apos;s no news to report :/</i>
      </p>
    );

  return (
    <div className="flex flex-col gap-3">
      {posts.map((post: any, id: number) => (
        <NewsPost key={id} post={post} />
      ))}
    </div>
  );
}
