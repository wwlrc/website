"use client";

import { useState, useEffect, useCallback } from "react";
import { getPosts } from "@/spanner/blog";

export default function SpannerBlog({ staticPosts }: any) {
  const [posts, setPosts] = useState(staticPosts);
  const [isLoading, setLoading] = useState(true);

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
      <p>
        <i>Looks like there&apos;s no news to report :/</i>
      </p>
    );

  return (
    <div>
      {posts.map((post: any, id: number) => (
        <div key={id}>
          <div className="mb-2 bg-gray-10 rounded-lg border border-solid border-gray-200 dark:border-gray-600">
            <div className="bg-gray-200 dark:bg-gray-600 px-2 py-3 rounded-t-md">
              <h3 className="text-l dark:text-white font-bold">{post.title}</h3>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-800">
              <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
              <p className="text-sm mt-2">
                <i>
                  Created at {new Date(post.created_at).toLocaleString()} by{" "}
                  {post.author}
                </i>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
