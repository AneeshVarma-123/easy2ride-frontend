import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const videoArray = [
        "video-1.mp4",
        "video-2.mp4",
        "video-3.mp4",
      ];

      const navigate = useNavigate();

      const handleExploreClick = () => {
          navigate("/explore");
      };

      const handleSignupClick = () => {
        navigate("/signup");
    };


  return (
    <div className="page-container">
    <nav className="navbar">
      <div className="left-section">
        <img src="/logo.jpeg" alt="Logo" className="logo" />
        <span className="brand-name">Easy2Ride</span>
      </div>

      <div className="center-links">
        <a href="/my-rides" className="link">My Rides</a>
        <a href="/discussion-forums" className="link">Discussion Forums</a>
        <a href="/whats-new" className="link">What's New</a>
      </div>

      <div className="right-section">
        <a href="/signup" className="link" onClick ={handleSignupClick}>SIGNUP</a>
        <a href="/settings" className="link">Settings</a>
        <a href="/about" className="link">About</a>
      </div>
    </nav>
    {/* Main Division at Center */}
    <div className="divmain">
        {/* Left Division - Text & Buttons */}
        <div className="div-1">
          <h1 className="title">EASY TO RIDE</h1>
          <p className="subtitle">built to connect riders</p>
          <div className="button-container">
            <button className="yellow-button" onClick={handleExploreClick}>Explore</button>
            <button className="yellow-button">Plan for a Ride</button>
          </div>
        </div>

        {/* Right Division - Video Player */}
        <div className="div-2">
        
              <video class = "video-box"
                
                src={videoArray[0]} 
                
                autoPlay 
                loop 
                muted 
              />
            
        </div>
      </div>
    </div>
  );
};

export default Navbar;
