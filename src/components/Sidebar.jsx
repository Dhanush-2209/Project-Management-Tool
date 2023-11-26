import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

const Sidebar = ({ handleLogout }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Display a confirmation alert
    const confirmSignOut = window.confirm("Are you sure you want to sign out?");
    
    if (confirmSignOut) {
      // Perform sign-out logic and navigate to the login page
      handleLogout();
      navigate('/sign-in');
    }
  };

  return (
    <div>
      <div className="top-right">
        <button className="sign-out-button" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
      <div id="mySidenav" className="sidenav">
        <Link to="/dashboard" id="dashboard">
          Dashboard
        </Link>
        <Link to="/home" id="home">
          Home
        </Link>
        <Link to="/about" id="about">
          About
        </Link>
        <Link to="/project" id="project">
          Project
        </Link>
      </div>
      <div style={{ marginLeft: '80px' }}>
        <h2>Welcome To Project Management Tool</h2>
        <p>This is the website where you can do your team project work</p>
        <div className="button-container">
          <Link to="/team-lead-page" className="button-link">
            Team
          </Link>
          <Link to="/individual-page" className="button-link">
            Individual
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
