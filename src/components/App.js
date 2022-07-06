import React, { useEffect, useState } from "react";
import { Header, Login, Posts} from "./index.js";
import { fetchAllPosts } from "../api";
import './App.css'
const App = () => {
  const [posts, setPosts] = useState([]);
//   async function getAllPosts() {
//     const fetchPosts = await fetchAllPosts();
//     setPosts(fetchPosts);
//   }
//   useEffect(() => {
//     getAllPosts();
//   }, []);

  return (
    <div>
  <Header />
  <>
  <Login />
  </>
 <Posts posts={posts} setPosts={setPosts} />
    </div>
  )
}

export default App;


//we will need to create a nav bar that allows users to route to Posts, Profile, Home, and allow them to logout. 