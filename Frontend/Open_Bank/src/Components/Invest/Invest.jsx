import { useEffect } from "react";
import "./Invest.css";
import axios from "axios";
export default function Invest() {

  async function getInvestmetsApi() {
    const response = await axios.get("http://localhost:3000/investments");
    console.log("response", response);
  }

  useEffect(() => {
    getInvestmetsApi();
  }, []);

  return (
    <>
      Invest
      <h3>component</h3>
    </>
  );
}
