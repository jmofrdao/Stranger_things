import React, { useEffect, useState } from "react";
import { Header, Login, Posts, Profile, Register } from "./index.js";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
const App = () => {
  const [posts, setPosts] = useState([]);
  const [myInfo, setMyInfo] = useState([]);
  const [username, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
//add a check to see if there is a token in local storage, if so setIsLoggedIn(true)
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setuserName={setuserName} setPassword={setPassword}/>
      <div>
        {isLoggedIn ? (
          <Routes>
            <Route
              path="/Profile"
              element={<Profile myInfo={myInfo} setMyInfo={setMyInfo} />}
            />

            <Route
              path="/Posts"
              element={<Posts posts={posts} setPosts={setPosts} />}
            />
          </Routes>
        ) : (
          <div>
            
            <Login
              username={username}
              setuserName={setuserName}
              password={password}
              setPassword={setPassword}
              setIsLoggedIn={setIsLoggedIn}
            />
            <Routes>
              <Route
                path="/Posts"
                element={<Posts posts={posts} setPosts={setPosts} />}
              />

              <Route
                path="/Register"
                element={
                  <Register
                    username={username}
                    setuserName={setuserName}
                    password={password}
                    setPassword={setPassword}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                }
              />
            </Routes>
          </div>
        )}
      </div>
      <Routes>



        
      </Routes>
    </div>
  );
};

export default App;

//we will need to create a nav bar that allows users to route to Posts, Profile, Home, and allow them to logout.
