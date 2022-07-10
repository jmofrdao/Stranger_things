import "./Posts.css";
import React, { useEffect } from "react";
import { fetchAllPosts } from "../api";
import { NavLink } from "react-router-dom";
import NewMessage from "./NewMessage";
import DeletePosts from "./DeletePosts"


const Posts = ({ posts, setPosts, isLoggedIn, myInfo, setMyInfo, username }) => {
  
 
  async function getAllPosts() {
    const fetchPosts = await fetchAllPosts();
    setPosts(fetchPosts);
  }
  useEffect(() => {
    getAllPosts();
  }, []);
  console.log("Posts", posts);
  const getPosts = posts.map((post)=> {
      return (
        
          <div className='descriptionBox' key={post._id}>
          <h1 className='title'>{post.title}</h1>
          <p className='descriptions'>{post.description}</p>
          <p className='descriptions'>{post.author.username}</p>
          <p className='descriptions'>{post.price}</p>
          <p className='descriptions'>{post.location}</p>
          <p className='descriptions'>{post.willDeliver}</p>
        { isLoggedIn ?
          <>
          { post.author.username !== username ?
          <NewMessage myInfo={myInfo} setMyInfo={setMyInfo}/>
          :null
          }
          { post.author.username === username ?
          <>
          <DeletePosts post={post} _id={post._id} posts={posts} setPosts={setPosts}  />
          <button>Edit will go here</button>
          </>
          : null
          }
          </>
          :null }
          </div>  
      )
  })
  
  return (
    <>
    { localStorage.getItem("token") ? 
    <div>
    <NavLink to='/AddPosts'>Add New Post</NavLink>
    </div> 
    : null
    }
    <div>
    {getPosts}
    </div> 
    </>
  )
};
export default Posts;


// if it is your post, you should only see delete or edit
//if it is not yours, you should only see message
//if post Id matches post render delete edit buttons otherwise render message button

