import React, { useEffect, useState } from "react";
import { Header, Login, Posts, Profile, Register} from "./index.js";
import { fetchAllPosts } from "../api";
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
const App = () => {
  const [posts, setPosts] = useState([]);
  const [myInfo,setMyInfo] = useState([])
  const [username,setuserName] = useState("")
  const [password,setPassword] = useState("")
  
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
  <Login username={username} setuserName={setuserName} password={password} setPassword= {setPassword} />
<Routes>
  
  <Route path='/Profile' element={<Profile myInfo={myInfo} setMyInfo={setMyInfo}/>}/>

  <Route path='/Posts'element={<Posts posts={posts} setPosts={setPosts}/>}/>

  <Route path='/Register'element={<Register username={username} setuserName={setuserName} password={password} setPassword= {setPassword} />}/>
  </Routes>
  </div>
    </div>
  )
}

export default App;


//we will need to create a nav bar that allows users to route to Posts, Profile, Home, and allow them to logout. 