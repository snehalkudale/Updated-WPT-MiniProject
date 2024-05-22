import React from 'react';
import { Link } from 'react-router-dom';
import './ForgorPasswordCSS.css';

function ForgotPassword() {
  const showAlert = () => {
    alert("Password Changed!");
  };

  const validateForm = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const newPassword = event.target.newPassword.value;
    const confirmNewPassword = event.target.confirmNewPassword.value;

    if (email === "") {
      alert("Email must be filled out");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email address");
      return false;
    }

    if (newPassword === "") {
      alert("New Password must be filled out");
      return false;
    }

    if (newPassword.length < 8) {
      alert("New Password must be at least 8 characters long");
      return false;
    }

    if (confirmNewPassword === "") {
      alert("Confirm New Password must be filled out");
      return false;
    }

    if (newPassword !== confirmNewPassword) {
      alert("New Passwords do not match");
      return false;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/auth/forgotPassword`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password: newPassword }),
      });

      if (response.ok) {
        showAlert();
      } else {
        alert("Failed to update password. Please try again.");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("An error occurred while updating password. Please try again.");
    }

    return true;
  };

  return (
    <div className="body">
      <div className="container6" id='main'>
        <h1 className='h11'>Forgot Password</h1>
        <form name="forgotPasswordForm" onSubmit={validateForm}>
          <label><b>Email</b></label>
          <input 
            type="email" 
            placeholder="Enter Email" 
            name="email" 
            required 
          />
          <br/><br/>
          <label><b>Enter New Password</b></label>
          <input 
            type="password" 
            placeholder="Enter New Password" 
            name="newPassword" 
            required 
          />
          <br/><br/>
          <label><b>Confirm New Password</b></label>
          <input 
            type="password" 
            placeholder="Confirm New Password" 
            name="confirmNewPassword" 
            required 
          />
          <br/><br/>

          <button type="submit" className='sbmt'>Confirm</button>
          <br/>
          <button type="button" className='lgn'><Link to="/" className='cancel'>Cancel</Link></button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
