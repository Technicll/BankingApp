import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './CreditScore.css'; // Optional: Add custom CSS styling

const CreditScore = () => {
  const username = "John Doe"; // Example username
  const creditScore = 750; // Example credit score value

  return (
    <div className="credit-score-page-container">
      {/* Navbar */}
      <div className="navbar">
        <div className="user-info">
          <span className="username">{username}</span>
        </div>
        <div className="user-icon">
          <div className="icon">
            <span>{username.charAt(0)}</span>
          </div>
        </div>
      </div>

      {/* Mini Navbar - Full Width */}
      <div className="mini-navbar">
        
      </div>

      {/* Main Content Section - Restricted to 800px */}
      <div className="credit-score-container">
        {/* Credit Score Info */}
        <div className="credit-score-info">
          <h2>Credit Score for {username}</h2>
          <div className="credit-score">
            <h3>Your Credit Score:</h3>
            <p>{creditScore}</p>
          </div>
        </div>

        {/* Back to Dashboard Button */}
        <div className="back-to-dashboard">
          <Link to="/dashboard">
            <button className="back-button">Back to Dashboard</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreditScore;
