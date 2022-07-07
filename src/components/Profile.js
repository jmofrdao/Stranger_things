import './Profile.css'

import React, { useEffect } from "react";
import { fetchUsers } from "../api";

const Profile = ({ users, setUsers }) => {
  async function getAllUsers() {
    const getUsers = await fetchUsers();
    setUsers(getUsers);
  }
  useEffect(() => {
    getAllUsers();
  }, []);
console.log("users", users)
  const getUsers = users.map((user, index)=> {
      return (
          <div>Hello World</div>
      )
  })
  return (
      <div>
        {getUsers}
      </div>
  )

};
export default Profile;