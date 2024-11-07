import React, { useState } from "react";
import Single from "../assests/logo.png";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setErrorMessage("All fields are required");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Invalid email format");
      return;
    }

    setErrorMessage(""); // Clear any previous errors
    await handleSignUp();
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:5001/auth/login', {
        email,
        password,
      });
      console.log('Sign Up Successful:', response.data);
      navigate("/home"); // Navigate to the login page after successful registration
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data);
        console.error('Sign Up Error:', error.response.data);
      } else {
        setErrorMessage("An error occurred during sign up");
        console.error('Sign Up Error:', error.message);
      }
    }
  };

  return (
    <div className="Register">
      <h1>Movie Market</h1>
      <div className="Register-modal">
        <div className="Register-modal-content">
          <img className="Register-Logo" src={Single} alt="Logo" />
          <h3 className="Register-head">LogIn</h3>
          {errorMessage && (
            <p className="Register-error-message">{errorMessage}</p>
          )}
         
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
