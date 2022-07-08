import "./Posts.css";
import React, { useEffect } from "react";
import { fetchAllPosts } from "../api";
import { NavLink } from "react-router-dom";
import {AddPosts} from './index.js'

const Posts = ({ posts, setPosts }) => {
  // const [myPost,setMyPost] = useState([])

  
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
        
          <div className='descriptionBox' key={`mypostsmap: ${index}`}>
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
    <>
    <div>
    <NavLink to='/AddPosts'>Add New Post</NavLink>

    </div>
      <div>
        {getPosts}
        </div>
        </>
  )
};
export default Posts;

// we need to map over posts
