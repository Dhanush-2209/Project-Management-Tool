import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="footer-container">
    <div className="main-content">
    </div>
    <div className="footer">
      <ul className="footer-links">
        <li>
          <a href="/for-business">For Business</a>
          <ul>
            <li>
              <a href="/Admin">Admin</a>
            </li>
            <li>
              <a href="/user">User</a>
            </li>
            <li>
              <a href="/individual">Individual</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/resources">Resources</a>
          <ul>
            <li>
              <a href="https://projectmanagementacademy.net/resources/">Resource Center</a>
            </li>
            <li>
              <a href="https://rebelsguidetopm.com/">Blogs</a>
            </li>
            <li>
              <a href="https://www.indeed.com/career-advice/finding-a-job/careers-for-project-managers">Careers</a>              
            </li>
          </ul>
        </li>
        <li>
          <a href="/partners">Partners</a>
          <ul>
            <li>
              <a href="/employer">Swing Tech</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/company">Company</a>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/press">Press</a>
            </li>
            <li>
              <a href="/career">Career</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="footer-social-media">
      <a href="https://www.facebook.com/ProjectManagementToolsThatWork/" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://twitter.com/PMArticles" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://www.linkedin.com/learning/project-management-choosing-the-right-online-tool" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://www.instagram.com/thedigitalpm/?hl=en" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </div>

      <div className="footer-additional-links">
        <a href="/terms"><span>Terms & Conditions</span></a>
        <a href="/privacy"><span>Privacy</span></a>
        <a href="/security"><span>Security</span></a>
      </div>

      <div className="footer-copyright">
        <p>@{new Date().getFullYear()} Our Company. All rights reserved.</p>
      </div>
    </div>
    </div>
  );
};

export default Footer;