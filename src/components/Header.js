import react from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header (){
    return (
        <div className = "NavBar">
            <h1>Stranger's Things</h1>
            <NavLink to= "/">Home</NavLink>  
            <NavLink to= "/Posts">Posts</NavLink>    
            <NavLink to= "/Profile">Profile</NavLink>  
            <NavLink to= "/Logout">Logout</NavLink>  
                    
        </div>

    )
}
 export default Header