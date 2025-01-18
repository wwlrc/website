"use client";

import { useState, useEffect } from 'react'
import { getPosts } from './api_client';

export default function SpannerBlog({ staticPosts }: any) {
    const [posts, setPosts] = useState(staticPosts)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        getPosts().then((posts) => {
            setPosts(posts)
        })
    }, [])

    if(!posts) return <p>No Blog Posts :/</p>
    return (<div>
            {posts.map((post: any, id: number) => (
                <div key={id}>
                    <h3 className="text-l font-bold mt-2">{post.title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                    <p className="text-sm"><i>Created at {post.created_at} by {post.author.first_name} {post.author.last_name}</i></p>
                </div>
            ))}
        </div>
    )
}