import { Routes, Route } from "react-router-dom";
import CustomTabs from "./Components/CustomTabs/CustomTabs";
import CustomCard from "./Components/CustomCard/CustomCard";
import ExploreAllHdfcBank from "./Components/ExploreAllHdfcBank/ExploreAllHdfcBank";
import SimplyFinanance from "./Components/SimplyFinanance/SimplyFinanance";
import SignUp from "./Components/SignUp/SignUp";
import NetBankingLoginForm from "./Components/NetBankingLoginForm/NetBankingLoginForm";
import Dashboard from "./Components/Dashboard/Dashboard";
import Bills_Recharge from "./Components/Bills_Recharge/Bills_Recharge";
import Insure from "./Components/Insure/Insure";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NetBankingLoginForm />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tabs" element={<CustomTabs />} />
      <Route path="/cards" element={<CustomCard />} />
      <Route path="/explore" element={<ExploreAllHdfcBank />} />
      <Route path="/finance" element={<SimplyFinanance />} />
      <Route path="/billsrecharge" element={<Bills_Recharge />} />
      <Route path="/insure" element={<Insure />} />
    </Routes>
  );
}

export default App;
