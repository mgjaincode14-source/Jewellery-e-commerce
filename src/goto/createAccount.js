import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./createAccount.css";

const CreateAccount = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/create-account", {
        ...formData,
        email
      });

      alert(res.data.message);

      // Redirect to login after success
      navigate("/login");

    } catch (err) {
      alert(err.response?.data?.message || "Error creating account");
    }
  };

  return (
    <div className="create-overlay">
      <div className="create-container">

        <h2>Create Your Account</h2>
        <p>Complete your profile details</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="create-input"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="username"
            placeholder="Username for this site"
            className="create-input"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Create Password"
            className="create-input"
            onChange={handleChange}
            required
          />

          <button type="submit" className="create-btn">
            Create Account
          </button>
        </form>

      </div>
    </div>
  );
};

export default CreateAccount;