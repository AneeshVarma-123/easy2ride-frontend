import React from 'react';
import './signup.css';

function Signup() {
  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2 className="signup-title">Sign Up</h2>

        <form className="signup-form">
          <label className="input-label"></label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="input-field" 
          />

          <label className="input-label"></label>
          <input 
            type="password" 
            placeholder="Enter your password" 
            className="input-field" 
          />

          <button type="submit" className="signup-button">Sign Up</button>

          <a href="/create-account" className="create-account-link">
            Create New Account
          </a>
        </form>
      </div>
    </div>
  );
}

export default Signup;
