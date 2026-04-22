import React from "react";
import { useState } from "react";
import "../NetBankingLoginForm/NetBankingLoginForm.css";
export default function NetBankingLoginForm() {
  const [CustomerID, setCustomerID] = useState("");
  const [Password, setPassword] = useState("");

  function handleCustomerID(event) {
    setCustomerID(event.target.value);
    console.log("event.target.value", event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <>
      <div className="flex-container">
        NetBankingLoginForm
        <input
          type="text"
          onChange={handleCustomerID}
          style={{ borderRadius: "6px" }}
        />
        Customer Id
        <input
          type="text"
          onChange={handlePassword}
          style={{ borderRadius: "6px"}}
        />{" "}
        Password
        <button style={{ borderRadius: "6px", border: "none" }}>Login</button>
      </div>
    </>
  );
}
