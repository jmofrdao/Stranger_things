import "./Posts.css";
import React, { useEffect } from "react";
import { fetchAllPosts } from "../api";

const Posts = ({ posts, setPosts }) => {
  async function getAllPosts() {
    const fetchPosts = await fetchAllPosts();
    setPosts(fetchPosts);
  }
  useEffect(() => {
    getAllPosts();
  }, []);
  console.log("Posts", posts);
  const getPosts = posts.map((post, index)=> {
      return (
          <div className='descriptionBox' key={posts.index}>
          <h1 className='title'>{post.title}</h1>
          <p className='descriptions'>{post.description}</p>
          <p className='descriptions'>{post.author.username}</p>
          <p className='descriptions'>{post.price}</p>
          <p className='descriptions'>{post.location}</p>
          <p className='descriptions'>{post.willDeliver}</p>
          </div>
      )
  })
  return (
      <div>
        {getPosts}
      </div>
  )

};
export default Posts;

// we need to map over posts
