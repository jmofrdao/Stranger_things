import './Posts.css'
import React, { useEffect } from 'react'
import { fetchAllPosts } from "../api";


const Posts = ({posts, setPosts}) => {
     async function getAllPosts() {
    const fetchPosts = await fetchAllPosts();
    setPosts(fetchPosts);
  }
  useEffect(() => {
    getAllPosts();
  }, []);
    console.log("Posts",posts)
    {posts.map((post, index) => {
        return (
            <div onClick={(event) =>{
            setPosts(post)  
            }}>
             {post}
                
            </div>
        )
    
    
    })
}
  
}
export default Posts


// we need to map over posts