import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import './TransferPayments.css'; // Optional: Add a separate CSS file for this page

const TransferPayments = ({ balances, onTransfer }) => {
  const [amount, setAmount] = useState(0);
  const [sourceAccount, setSourceAccount] = useState("checking"); // Default source account
  const [targetAccount, setTargetAccount] = useState("savings"); // Default target account
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleAmountChange = (e) => {
    setAmount(parseFloat(e.target.value)); // Set the amount from the input
  };

  const handleSourceAccountChange = (e) => {
    setSourceAccount(e.target.value); // Set source account
  };

  const handleTargetAccountChange = (e) => {
    setTargetAccount(e.target.value); // Set target account
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }
    if (balances[sourceAccount] < amount) {
      alert("Insufficient funds in the source account");
      return;
    }

    // Perform the transfer from source account to target account
    onTransfer(sourceAccount, targetAccount, amount);
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
              Source Account:
              <select value={sourceAccount} onChange={handleSourceAccountChange}>
                <option value="checking">Checking Account</option>
                <option value="savings">Savings Account</option>
                <option value="creditCard">Credit Card</option>
              </select>
            </label>

            <label>
              Target Account:
              <select value={targetAccount} onChange={handleTargetAccountChange}>
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
