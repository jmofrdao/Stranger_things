import './Profile.css'

import React, { useEffect } from "react";
import { getProfile } from "../api";

const Profile = ({ myInfo, setMyInfo }) => {
  let token = "";
  useEffect(() => {
    token = localStorage.getItem("token")
    async function getMyInfo(){
      const myNewInfo = await getProfile(token)
      setMyInfo(myNewInfo)
    }
    getMyInfo()
  }, []);
  
  const myMessages = myInfo.messages.map ((message, index) => {
    return (
      <div>
    {message} 
    </div>
    )
  })
  
  return (
    <div>
      <h1>Welcome {myInfo.username}</h1>
      <h2>Messages to Me:</h2>
      <p> {myMessages} </p>





    </div>
  )

 
};
export default Profile;