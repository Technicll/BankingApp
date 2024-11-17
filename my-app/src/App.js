import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard"; // Import the Dashboard component
import TransferPayments from "./TransferPayments"; // Import the TransferPayments component
import SignUp from "./SignUp"; // Import the SignUp component
import Account from "./Account"; // Import the Account page
import CreditScore from "./CreditScore"; // Import the CreditScore component
import Investment from "./Investment"; // Import the Investment component (if you added it)
import "./App.css"; // For optional styling

// SignIn component for user authentication
const SignIn = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;

    if (username === "" || password === "") {
      setError("Both fields are required.");
    } else {
      setError("");
      console.log("Sign-in successful:", formData);
      navigate("/dashboard"); // Redirect to Dashboard after sign-in
    }
  };

  return (
    <div className="wholeContainer">
       <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="signin-form">
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Create one here</a>
      </p>
    </div>
    </div>
   
  );
};

// Main App component with routing setup and state management for balances
const App = () => {
  // State to store account balances
  const [balances, setBalances] = useState({
    checking: 5000,
    savings: 10000,
    creditCard: 2500,
  });

  // Function to handle money transfer between accounts
  const handleTransfer = (account, amount) => {
    setBalances((prevBalances) => {
      let newBalances = { ...prevBalances };
      if (amount <= 0) return newBalances;

      // Update the selected account balance (e.g., transfer from checking to savings)
      newBalances[account] += amount;
      return newBalances;
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} /> {/* Sign-in page */}
        <Route path="/signup" element={<SignUp />} /> {/* Sign-up page */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard page */}
        <Route
          path="/account"
          element={<Account balances={balances} />} // Pass balances to Account page
        />
        <Route
          path="/transfer-payments"
          element={<TransferPayments balances={balances} onTransfer={handleTransfer} />} // Pass balances and onTransfer to TransferPayments
        />
        <Route path="/credit-score" element={<CreditScore />} /> {/* Credit Score page */}
        <Route path="/investments" element={<Investment />} /> {/* Investment page */}
      </Routes>
    </Router>
  );
};

export default App;
