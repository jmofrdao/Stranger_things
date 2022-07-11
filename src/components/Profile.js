import "./Profile.css";

import React, { useEffect } from "react";
import { getProfile } from "../api";

const Profile = ({ myInfo, setMyInfo }) => {
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      async function getMyInfo() {
        const myNewInfo = await getProfile(token);
        console.log(myNewInfo, "mynewinfo");
        setMyInfo(myNewInfo);
      }
      getMyInfo();
    }
  }, []);

  // const myMessages = myInfo.messages?
  console.log(myInfo, "myINfo");
  return (
    <div id="messagesBox">
      {myInfo && myInfo.username ? (
        <h1 className="introTitle">Welcome {myInfo.username}!</h1>
      ) : (
        <h1 className="introTitle">Welcome</h1>
      )}
      <h2 id="messagesTitle">Messages to You:</h2>
      {myInfo && myInfo.messages && myInfo.messages.length ? (
        myInfo.messages.map((message, index) => {
          return (
            <div>
              {message.fromUser.username !== myInfo.username ? (
                <div id="myMessages" key={`mymessagesmap: ${index}`}>
                  <h3>From: {message.fromUser.username}</h3>
                  <h3>In Response to: {message.post.title}</h3>
                  <p>Message: {message.content}</p>
                </div>
              ) : null}
            </div>
          );
        })
      ) : (
        <div id="noMessages">You have no messages at this time.</div>
      )}
      <h2 id="messagesTitle">Messages from You:</h2>
      {myInfo && myInfo.messages && myInfo.messages.length ? (
        myInfo.messages.map((message, index) => {
          return (
            <div>
              {message.fromUser.username === myInfo.username ? (
                <div id="myMessages" key={`mymessagesmap: ${index}`}>
                  <h3>From: me</h3>
                  <h3>In Response to: {message.post.title}</h3>
                  <p>Message: {message.content}</p>
                </div>
              ) : null}
            </div>
          );
        })
      ) : (
        <div id="noMessages">You have no messages at this time.</div>
      )}
    </div>
  );
};
export default Profile;
