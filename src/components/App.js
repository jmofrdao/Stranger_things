import React, { useEffect, useState } from "react";
import { Header, Login, Posts, Profile} from "./index.js";
import { fetchAllPosts } from "../api";
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
const App = () => {
  const [posts, setPosts] = useState([]);
  const [users,setUsers] = useState([])
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
  <div>
<Routes>
  {/* <Login /> */}
  <Route path='/Profile' element={<Profile users={users} setUsers={setUsers}/>}/>
  <Route path='/Posts'element={<Posts posts={posts} setPosts={setPosts}/>}/>
  </Routes>
  </div>
    </div>
  )
}

export default App;


//we will need to create a nav bar that allows users to route to Posts, Profile, Home, and allow them to logout. 