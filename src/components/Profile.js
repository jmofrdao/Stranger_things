import "./Profile.css";

import React, { useEffect } from "react";
import { getProfile } from "../api";

const Profile = ({ myInfo, setMyInfo }) => {
  
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token){
      async function getMyInfo() {
        const myNewInfo = await getProfile(token);
        console.log(myNewInfo, "mynewinfo")
        setMyInfo(myNewInfo);
      }
      getMyInfo();
    }
   
  }, []);

  // const myMessages = myInfo.messages?

  return (
    <div id="messagesBox">
      {myInfo && myInfo.username ? (
        <h1 className="introTitle">Welcome {myInfo.username}!</h1>
      ) : (
        <h1 className="introTitle">Welcome</h1>
      )}
      <h2 id="messagesTitle">Messages to Me:</h2>
      {myInfo && myInfo.messages && myInfo.messages.length ? (
        myInfo.messages.map((message, index) => {
          return <div id="myMessages" key={`mymessagesmap: ${index}`}>{message}</div>
        })
      ) : (
        <div id="noMessages">You have no messages at this time.</div>
      )}
      
    </div>
  );
};
export default Profile;
