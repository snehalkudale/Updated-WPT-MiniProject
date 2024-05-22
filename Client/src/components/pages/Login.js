import React, { useState } from 'react';
import './Login.css';
import icon from './App Icon.jpg';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {

  

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (!user.email) {
      alert('Email must be filled out');
      return false;
    }

    if (!user.password) {
      alert('Password must be filled out');
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });

        if (response.ok) {
          alert("Login successful");
          setUser({ password: "", email: "" });
          navigate('/home');
        } else {
          alert("Invalid credentials");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className='body'>
      <div className="container1">
        <h2>Login To Your Account</h2>

        <div className="imgcontainer">
          <img src={icon} alt="Avatar" className="avatar" />
        </div>

        <form onSubmit={handleSubmit}>
          <label><b>Email</b></label>
          <input
            type="text"
            placeholder="Enter Email Address"
            name="email" // Add name attribute
            value={user.email}
            onChange={handleInput}
            required
          />

          <label><b>Password</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password" // Add name attribute
            value={user.password}
            onChange={handleInput}
            required
          />
          <br /> 
          <button type="submit" className='center'>
            Login
          </button>
        </form>

        {/* <p>Not have an account? </p> */}
        <br /> 
  
        <button type="button" className='log' style={{ alignItems: 'center' }}>
          <Link to="/signup" className="signupbtn">Create Account</Link>
        </button>

        <br />

        <button type="button" className='changepass'>
          <Link to="/forgotPassword" className='e'>Forgot Password?</Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
