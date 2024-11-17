import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import './Account.css'; // For any specific styles for Account page

const Account = ({ balances }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleBackToDashboard = () => {
    navigate("/dashboard"); // Navigate to the dashboard page
  };

  return (
    <div className="account-container">
      <h2>Your Accounts</h2>

      <div className="account-cards">
        <div className="account-card">
          <h3>Checking Account</h3>
          <div className="balance">Balance: ${balances.checking}</div>
        </div>
        <div className="account-card">
          <h3>Savings Account</h3>
          <div className="balance">Balance: ${balances.savings}</div>
        </div>
      </div>

      <div className="credit-card-section">
        <div className="credit-card">
          <h3>Credit Card</h3>
          <div className="balance">Balance: ${balances.creditCard}</div>
        </div>
      </div>

      {/* Back to Dashboard button */}
      <button onClick={handleBackToDashboard} className="back-button">
        Back to Dashboard
      </button>
    </div>
  );
};

export default Account;
