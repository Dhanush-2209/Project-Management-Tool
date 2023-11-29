import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './components/login.component';
import SignUp from './components/signup.component';
import Sidebar from './components/Sidebar';
import TeamLeadPage from './components/TeamLeadPage';
import ProjectsPage from './components/ProjectPage';
import IndividualPage from './components/IndividualPage';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import UpdateTeamProjectPage from './components/UpdateTeamProjectPage';
import UpdateIndividualProjectPage from './components/UpdateIndividualProjectPage';
import ForgotPassword from './components/ForgotPassword'; // Import the new component
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [userToken, setUserToken] = useState(null);

  const handleLogin = (email, token) => {
    setIsAuthenticated(true);
    setUserEmail(email);
    setUserToken(token);
  };

  const handleLogout = () => {
    // Perform any additional logout logic (clearing tokens, etc.)
    setIsAuthenticated(false);
    setUserEmail(null);
    setUserToken(null);
  };

  return (
    <Router>
      <div className={`App${!isAuthenticated ? ' initial-page' : ''}`}>
        {isAuthenticated ? (
          <>
            <Sidebar handleLogout={handleLogout} />
            <Routes>
            <Route path="/sign-in" element={<Navigate replace to="/home" />} />
              <Route path="/team-lead-page" element={<TeamLeadPage />} />
              <Route path="/project" element={<ProjectsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/individual-page" element={<IndividualPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/home" element={<Home />} />
              <Route path="/update/team/:projectName" element={<UpdateTeamProjectPage />} />
              <Route path="/update/individual/:projectName" element={<UpdateIndividualProjectPage />} />
            </Routes>
            <Footer />
          </>
        ) : (
          <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
              <div className="container">
                <Link className="navbar-brand" to={'/sign-in'}></Link>
                <div className="navbar-buttons">
                  <Link className="btn btn-primary" to={'/sign-in'}>
                    Login
                  </Link>
                  <Link className="btn btn-secondary" to={'/sign-up'}>
                    Sign up
                  </Link>
                </div>
              </div>
            </nav>
            <div className="auth-wrapper">
              <div className="auth-inner">
                <Routes>
                  <Route
                    path="/"
                    element={<Navigate replace to="/sign-up" />}
                  />
                  <Route
                    path="/sign-in"
                    element={<Login onLogin={handleLogin} />}
                  />
                  <Route path="/sign-up" element={<SignUp />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                </Routes>
              </div>
            </div>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
