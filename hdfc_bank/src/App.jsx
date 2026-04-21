import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import CustomTabs from "./Components/CustomTabs/CustomTabs";
import CustomCard from "./Components/CustomCard/CustomCard";
import ExploreAllHdfcBank from "./Components/ExploreAllHdfcBank/ExploreAllHdfcBank";
import SimplyFinanance from "./Components/SimplyFinanance/SimplyFinanance";
import Login from "./Components/Login/Login";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<CustomTabs />} />
        <Route path="/cards" element={<CustomCard />} />
        <Route path="/explore" element={<ExploreAllHdfcBank />} />
        <Route path="/finance" element={<SimplyFinanance />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
