import { fetchAllPosts } from "../api";
import React, { useState, useEffect } from 'react'

const Posts = () => {
    const [posts,setPosts] = useState()

    useEffect(() => {
        const fetchPosts = fetchAllPosts()
        setPosts(fetchPosts)
    }, [])
    console.log("Posts",posts)
    return (
        <div></div>
    )
}
export default Posts