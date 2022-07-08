import react from "react";
import { useNavigate } from 'react-router'
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header({ isLoggedIn, setIsLoggedIn, setuserName, setPassword }) {
let navigate = useNavigate();
  const logout = ()=> {
      localStorage.removeItem("token")
      setIsLoggedIn(false)
      navigate('/')
      setuserName("")
      setPassword("")
           
  }
    return (
    <div className="NavBar">
      <h1>Stranger's Things</h1>
      {isLoggedIn ? (
        <>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Posts">Posts</NavLink>
          <NavLink to="/Profile">Profile</NavLink>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
        <NavLink to='/Login'>Login</NavLink>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Posts">Posts</NavLink>
        </>
      )}
    </div>
  );
}
export default Header;
