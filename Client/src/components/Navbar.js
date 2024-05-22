import React from 'react';
import { Link} from 'react-router-dom';
import "./Navbar.css";
import logo from "./assets/logo.jpg"


export const Navbar =() => {
  return (
    <nav>
      
       <ul className='c'>
            <li><Link to="/" class="cls">Sign Out</Link></li>
            <li><Link to="/about" class="title">About Us</Link></li>
            <li><Link to="/feedback" class="title">Feedback</Link></li>
            <li><Link to="/verifyNews" class="title">Verify News</Link></li>   
            <li><Link to="/home" class="title">Home</Link></li>    
        </ul>
        <img src={logo} alt="App Icon" class="logo" />
        </nav>
  )
}
