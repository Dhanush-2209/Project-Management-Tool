import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; 

const Sidebar = () => {
  return (
    <div>
      <div className="top-right">
        <button className="sign-out-button">Sign Out</button>
      </div>
      <div id="mySidenav" className="sidenav">
        <Link to="/dashboard" id="dashboard">Dashboard</Link>
        <Link to="/home" id="home">Home</Link>
        <Link to="/about" id="about">About</Link>
        <Link to="/project" id="project">Project</Link>
      </div>
      <div style={{ marginLeft: '80px' }}>
        <h2>Welcome To Project Management Tool</h2>
        <p>This is the website where you can do your team project work</p>
        <div className="button-container">
    <Link to="/team-lead-page" className="button-link">Team</Link>
    <Link to="/individual-page" className="button-link">Individual</Link>
  </div>
      </div>
    </div>
  );
};

export default Sidebar;