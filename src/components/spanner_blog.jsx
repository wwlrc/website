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

    return (
        <ul>
            {posts.map(id, post => (
                <li>{post.title}</li>
            ))}
        </ul>
    )
}