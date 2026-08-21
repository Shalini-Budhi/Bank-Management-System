import { useEffect } from "react";
import axios from "axios";

export default function Fd_Rd() {
  async function getFdRdApi() {
    const response = await axios.get("http://localhost:3000/fdrd");
    console.log("response", response);
  }

  useEffect(() => {
    getFdRdApi();
  }, []);

  return (
    <>
      FD/RD
      <h3>component</h3>
    </>
  );
}
