import React, { useEffect, useState} from 'react'
import {Posts} from './index.js'
import { fetchAllPosts } from "../api";
const App = () => {
    const [posts,setPosts] = useState()
    async function getAllPosts (){
        const fetchPosts = await fetchAllPosts()
        setPosts(fetchPosts)

    }
    useEffect(() => {
        getAllPosts()
    }, [])

    return (

        <Posts posts={posts}/>
    )
}

export default App