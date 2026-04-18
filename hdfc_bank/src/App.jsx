import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Button from "@mui/material/Button";
import NavBar from "./Components/NavBar/NavBar";
import CustomTabs from "./Components/CustomTabs/CustomTabs";
import CustomCard from "./Components/CustomCard/CustomCard";
import ExploreAllHdfcBank from "./Components/ExploreAllHdfcBank/ExploreAllHdfcBank";
import SimplyFinanance from "./Components/SimplyFinanance/SimplyFinanance";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <CustomTabs />

      <ExploreAllHdfcBank />
      <SimplyFinanance />
    </>
  );
}

export default App;

// Components ---

// Navbar
// tabs

// cards

// installation -- material ui npm i material ui

ExploreAllHdfcBank;
