import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
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
    if (user.username === "") {
      alert("Username must be filled out");
      return false;
    }

    if (user.email === "") {
      alert("Email must be filled out");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      alert("Invalid email address");
      return false;
    }

    if (user.password === "") {
      alert("Password must be filled out");
      return false;
    }

    // Password length validation
    if (user.password.length < 8) {
      alert("Password must be at least 8 characters long");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    if (validateForm()) {
      try {
        const response = await fetch(`http://localhost:5000/api/auth/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username : user.username,
            email: user.email,
            password: user.password,
         } ),
        });

        console.log(response);
        if (response.ok) {
          console.log(response);
          alert("Account Created Successfully!");
          setUser({ username: "", email: "", password: "" });
          navigate('/home');
        } else {
          const errorData = await response.json();
          alert(errorData.message || "An error occurred during registration.");
        }
      } catch (error) {
        console.log("register",error);
        // alert(e.message);
      }
    }
  };

  return (
    <div className="body">
      <div className="container2">
        <h1 className='h1'>SignUp</h1>
        <p className='p'>Please fill in this form to create an account.</p>
        <br />
        <form name="signupForm" onSubmit={handleSubmit}>
          <label><b>Username</b></label>
          <input
            type="text"
            placeholder="Enter your username"
            name="username"
            value={user.username}
            onChange={handleInput}
            required
          />
          <label><b>Email</b></label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={user.email}
            onChange={handleInput}
            required
          />
          <label><b>Password</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={user.password}
            onChange={handleInput}
            required
          />
          <br/>
          <button type="submit" className="btn1">Sign Up</button>
        </form>
        <br />
        <p> Already have an account? </p>
        <button type="button" className='btn1'>
          <Link to="/" className="loginbtn">Login</Link>
        </button>
      </div>
    </div>
  )
}

export default SignUp;
