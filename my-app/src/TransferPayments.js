import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import './TransferPayments.css'; // Optional: Add a separate CSS file for this page

const TransferPayments = ({ balances, onTransfer }) => {
  const [amount, setAmount] = useState(0);
  const [selectedAccount, setSelectedAccount] = useState("checking"); // Default to checking account
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleAmountChange = (e) => {
    setAmount(parseFloat(e.target.value)); // Set the amount from the input
  };

  const handleAccountChange = (e) => {
    setSelectedAccount(e.target.value); // Set selected account
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }
    // Call the onTransfer function passed down as prop
    onTransfer(selectedAccount, amount);
    navigate("/account"); // Navigate to Account page after transfer
  };

  return (
    <div className="transferContainer">
      <div className="transfer-payments-container">
      <h1>Transfer & Payments</h1>
      <p>Here you can transfer money and make payments.</p>

      <div className="transfer-form">
        <h3>Transfer Funds</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Amount:
            <input
              type="number"
              name="amount"
              value={amount}
              onChange={handleAmountChange}
            />
          </label>

          <label>
            Select Account:
            <select value={selectedAccount} onChange={handleAccountChange}>
              <option value="checking">Checking Account</option>
              <option value="savings">Savings Account</option>
              <option value="creditCard">Credit Card</option>
            </select>
          </label>

          <button type="submit">Transfer</button>
        </form>
      </div>

      {/* Back to Dashboard button */}
      <button onClick={() => navigate("/dashboard")} className="back-button">
        Back to Dashboard
      </button>
    </div>
    </div>
    
  );
};

export default TransferPayments;
