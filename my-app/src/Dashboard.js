import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import './Dashboard.css'; // Import the CSS file

const Dashboard = () => {
  const username = "John Doe"; // Example username
  const [dropdownVisible, setDropdownVisible] = useState(false); // State for dropdown visibility
  const navigate = useNavigate(); // Navigation hook

  return (
    <div className="dashboard-container">
      {/* Main Navigation Bar */}
      <div className="navbar">
        <div className="user-info">
          <span className="username">{username}</span>
        </div>
        <div className="user-icon">
          {/* Circular Icon */}
          <div
            className="icon"
            onClick={() => setDropdownVisible(!dropdownVisible)}
          >
            {/* Display the first letter of the username */}
            <span>{username.charAt(0)}</span>
          </div>
          {/* Dropdown Menu */}
          {dropdownVisible && (
            <div className="dropdown-menu">
              <button onClick={() => navigate("/")}>Logout</button>
            </div>
          )}
        </div>
      </div>

      {/* Mini Navbar */}
      <div className="mini-navbar">
        <ul className="nav-links">
          <li><Link to="/account">My Account</Link></li> {/* Link to Account page */}
          <li><Link to="/transfer-payments">Transfer & Payments</Link></li> {/* Link to Transfer & Payments page */}
          <li><Link to="/credit-score">Credit Score</Link></li> {/* Link to Credit Score page */}
        </ul>
      </div>

      {/* Welcome Message */}
      <div className="welcome-message">
        <h2>Welcome, {username}!</h2>
      </div>

      {/* Bonus Points Section */}
      <div className="bonus-points">
        <div className="bonus-text">
          You can earn 20,000 bonus points by investing in <Link to="/investments">Goldman Sachs</Link>.
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
