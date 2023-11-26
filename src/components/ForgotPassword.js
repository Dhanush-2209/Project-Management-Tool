// ForgotPassword.js
import React, { useState } from 'react';

const ForgotPassword = ({ history }) => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle password reset
    // You can make a fetch request to your server to reset the password
    // For simplicity, let's just log the data for now
    console.log('Email:', email);
    console.log('New Password:', newPassword);
    console.log('Confirm Password:', confirmPassword);
    
    // Redirect to login page after submitting
    history.push('/sign-in');
  };

  return (
    <div className="auth-inner">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h3>Forgot Password</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>New Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter new password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm new password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
