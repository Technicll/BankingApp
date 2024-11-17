import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css"; // Optional CSS specific to SignIn component

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

    // Simple validation: check if fields are empty
    if (username === "" || password === "") {
      setError("Both fields are required.");
      return;
    }

    // Here, you can handle what happens after the form is valid.
    // For now, I am just simulating a successful sign-in by navigating to the dashboard.
    console.log("Sign-in successful", formData);
    navigate("/dashboard"); // Simulate redirect after successful sign-in
  };

  return (
    <div className="wholeContainer">
      <div className="signin-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit} className="signin-form">
          {/* Display error message if present */}
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

export default SignIn;
