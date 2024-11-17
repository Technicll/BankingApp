// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import TransferPayments from "./TransferPayments";
import SignUp from "./SignUp";
import Account from "./Account";
import CreditScore from "./CreditScore";
import Investment from "./Investment";
import SignIn from "./SignIn"; // Import SignIn from SignIn.js
import "./App.css"; // For global styling

const App = () => {
  const [balances, setBalances] = useState({
    checking: 5000,
    savings: 10000,
    creditCard: 2500,
  });

  const handleTransfer = (sourceAccount, targetAccount, amount) => {
    setBalances((prevBalances) => {
      let newBalances = { ...prevBalances };
      if (amount <= 0 || prevBalances[sourceAccount] < amount) return newBalances;

      newBalances[sourceAccount] -= amount;
      newBalances[targetAccount] += amount;
      return newBalances;
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} /> {/* Sign-in page */}
        <Route path="/signup" element={<SignUp />} /> {/* Sign-up page */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard */}
        <Route path="/account" element={<Account balances={balances} />} /> {/* Account */}
        <Route
          path="/transfer-payments"
          element={<TransferPayments balances={balances} onTransfer={handleTransfer} />}
        /> {/* Transfer Payments */}
        <Route path="/credit-score" element={<CreditScore />} /> {/* Credit Score */}
        <Route path="/investments" element={<Investment />} /> {/* Investment */}
      </Routes>
    </Router>
  );
};

export default App;
