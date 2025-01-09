"use client";

import { useState, useEffect } from 'react'

export default function SpannerBlog() {
    const [posts, setPosts] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://spanner.wwlrc.co.uk/api/clubs/c/2/blog_posts')
            .then((res) => res.json())
            .then((data) => {
                setPosts(data.rows)
                setLoading(false)
            })
        }, [])

    if (isLoading) return <p>Loading...</p>
    if(!posts) return <p>No Blog Posts :/</p>

    return (<div>
            {posts.map((post, id) => (
                <div key={id}>
                    <h3 className="text-l font-bold mt-2">{post.title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                    <p className="text-sm"><i>Created at {post.created_at} by {post.author.first_name} {post.author.last_name}</i></p>
                </div>
            ))}
        </div>
    )
}