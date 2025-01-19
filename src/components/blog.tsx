"use client";

import { useState, useEffect, useCallback } from 'react'
import { getPosts } from '@/spanner/blog';

export default function SpannerBlog({ staticPosts }: any) {
    const [posts, setPosts] = useState(staticPosts)
    const [isLoading, setLoading] = useState(true)


    const updatePosts = () => {
        getPosts().then((posts) => {
            setPosts(posts)
        })
    }

    useEffect(() => {
        updatePosts()

        const intervalId = setInterval(() => {
            updatePosts()
        }, 60*1000)

        return () => clearInterval(intervalId); 
    }, [])

    if(!posts) return <p>No Blog Posts :/</p>
    return (<div>
            {posts.map((post: any, id: number) => (
                <div key={id}>
                    <div className="mb-2 border-solid border-grey-200 dark:border-grey-700 rounded-lg border">
                        <div className="bg-gray-700 dark:bg-gray-800 px-2 py-3 border-solid border-grey-200 dark:border-grey-700 border-b rounded-t-md">
                            <h3 className="text-l text-white font-bold ">{post.title}</h3>
                        </div>
                        <div className="p-3">
                            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                            <p className="text-sm mt-2"><i>Created at {(new Date(post.created_at)).toLocaleString()} by {post.author.first_name} {post.author.last_name}</i></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}