import './Login.css'
import { NavLink } from 'react-router-dom'
import React from "react";
import {loginUser} from '../api'




function Login ({username, setuserName, password, setPassword}){
    const handleOnChange = (event) => {
        const input = event.target.id
        if(input === 'username'){
            setuserName(event.target.value)
        }
        else {
            setPassword(event.target.value)
        }
    }
    
    const handleSubmit = async(event) =>{
      const token = loginUser(username, password)
      localStorage.setItem("token", token)
    }

    return (
       <div id = "logInBox">
       <form onSubmit={handleSubmit}>
            <h1>Log into your Stranger's Things account</h1>
            <label>User Name
            <input id="username" 
                type="text"
                placeholder="Your Username Here"
                value = {username}
                onChange={(event)=>{
                    setuserName(event.target.value)
                }}/>
            </label>
            <label>Password
            <input id="password" 
                type="text"
                placeholder="Your Password Here"
                value = {password}
                onChange={(event)=>{
                    setPassword(event.target.value)
                }}/>
            </label>
            <button type = "submit">Submit</button>
            <NavLink to= "/Register">Need to create an account? Register here.</NavLink> 
        </form>
        </div>
    )
}

export default Login