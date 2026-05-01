import { useEffect } from "react";
import "./Insure.css";
import axios from "axios";
export default function Insure() {
async function getInsuranceApi() {
  const response = await axios.get("http://localhost:3000/insurance");
  console.log("response", response);
}

useEffect(() => {
  getInsuranceApi();
}, []);


  return (

    <>
      Insure
       <h3>component</h3>
    </>
  );
}
