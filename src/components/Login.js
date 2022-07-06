import './Login.css'
import { NavLink } from 'react-router-dom'

 async function handleSubmit(event){
     event.prevenDefault(
     )
 }


function Login (){
    return (
       <div id = "logInBox">
       <form onSubmit={handleSubmit}>
            <h1>Log into your Stranger's Things account</h1>
            <label>User Name</label>
            <input id="username" placeholder="Your Username Here"></input>
            <label>Password</label>
            <input id="password" placeholder="Your Password Here"></input>
            <button type="submit">Login</button>
            <NavLink to= "/Register">Need to create an account? Register here.</NavLink> 
        </form>
        </div>
    )
}

export default Login