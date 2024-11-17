import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import './Investment.css'; // You can add a separate CSS file for styling

const Investment = () => {
  // Example investment data
  const [investments] = useState([
    {
      id: 1,
      name: "Stock 1",
      type: "Stock",
      value: 145.32,
      change: 1.2, // Positive change (in %)
      direction: "up", // Direction of movement
    },
    {
      id: 2,
      name: "Stock 2",
      type: "Stock",
      value: 230.50,
      change: -0.8, // Negative change (in %)
      direction: "down", // Direction of movement
    },
    {
      id: 3,
      name: "Gold ETF",
      type: "Financial Investment",
      value: 1800.00,
      change: 0.5, // Positive change (in %)
      direction: "up", // Direction of movement
    },
    {
      id: 4,
      name: "Real Estate Fund",
      type: "Financial Investment",
      value: 1500.50,
      change: -1.0, // Negative change (in %)
      direction: "down", // Direction of movement
    },
  ]);

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleBackToDashboard = () => {
    navigate("/dashboard"); // Navigate to the dashboard page
  };

  return (
    <div className="investment-container">
      <h1>Investments</h1>
      <p>View your stock and financial investments, and see their current performance.</p>

      <div className="investment-cards">
        {investments.map((investment) => (
          <div className="investment-card" key={investment.id}>
            <h3>{investment.name}</h3>
            <p>Type: {investment.type}</p>
            <div className="investment-value">
              <p>Value: ${investment.value}</p>
              <p className={investment.direction}>
                Change: {investment.change > 0 ? "+" : ""}
                {investment.change}%
              </p>
            </div>
            <div className="investment-arrow">
              {investment.direction === "up" ? (
                <span className="arrow-up">↑</span> // Up arrow
              ) : (
                <span className="arrow-down">↓</span> // Down arrow
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Back to Dashboard button */}
      <button onClick={handleBackToDashboard} className="back-button">
        Back to Dashboard
      </button>
    </div>
  );
};

export default Investment;
