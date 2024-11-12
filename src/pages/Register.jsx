// Register.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    localStorage.setItem("user", JSON.stringify({ username, password }));
    alert("Registered successfully!");
  };

  return (
    <div className="wrapper" style={styles.wrapper}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Register</h2>
        <input
          type="text"
          placeholder="Username"
          style={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button style={styles.button} onClick={handleRegister}>
          Register
        </button>
        <p style={styles.message}>
          Already have an account?{" "}
          <Link to="/login" style={styles.link}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },

  container: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
  message: {
    marginTop: "15px",
    color: "#555",
  },
  link: {
    color: "#007BFF",
    textDecoration: "none",
  },
};

export default Register;
