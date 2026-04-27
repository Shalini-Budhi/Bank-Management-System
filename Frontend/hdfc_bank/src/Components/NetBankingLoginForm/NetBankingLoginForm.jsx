import React from "react";
import { useState } from "react";
import "../NetBankingLoginForm/NetBankingLoginForm.css";
import axios from "axios";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
export default function NetBankingLoginForm() {
  const [CustomerID, setCustomerID] = useState("");
  const [Password, setPassword] = useState("");
  const [response, setResponse] = useState("");
  const [access_token, setAccess_token] = useState("");
  const navigate = useNavigate();
  function handleCustomerID(event) {
    setCustomerID(event.target.value);
    console.log("event.target.value", event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  async function handleLogin() {
    const response = await axios.post("http://localhost:3000/login", {
      CustomerID,
      Password,
    });
    console.log("respnes", response);
    setAccess_token(response.data.access_token);

    // ? login scucces /dashboard naviaget ayoipovali?
    if (response.status === 200) {
      navigate("/dashboard");
    } else {
      alert("wrong credentials");
    }

    // cases ? try catch
  }
  return (
    <>
      <div className="login-flex-container">
        NetBankingLoginForm
        <input
          type="text"
          onChange={handleCustomerID}
          style={{ borderRadius: "6px" }}
        />
        Customer Id
        <input
          type="password"
          onChange={handlePassword}
          style={{ borderRadius: "6px" }}
        />{" "}
        Password
        <button
          style={{ borderRadius: "6px", border: "none" }}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </>
  );
}

// proxy

// hit 3000

// nginx

// loadbalencer
