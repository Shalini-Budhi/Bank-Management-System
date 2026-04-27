import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import CustomTabs from "./Components/CustomTabs/CustomTabs";
import CustomCard from "./Components/CustomCard/CustomCard";
import ExploreAllHdfcBank from "./Components/ExploreAllHdfcBank/ExploreAllHdfcBank";
import SimplyFinanance from "./Components/SimplyFinanance/SimplyFinanance";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import HomeData from "./Components/HomeData/HomeData";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location, "location");

  return (
    <>
      {location.pathname === "/login" ? (
        <Login />
      ) : (
        <>
          <NavBar />

          <Routes>
            <Route path="/" element={<CustomTabs />} />
            <Route path="/cards" element={<CustomCard />} />
            <Route path="/explore" element={<ExploreAllHdfcBank />} />
            <Route path="/finance" element={<SimplyFinanance />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />

          </Routes>
        </>
      )}
    </>
  );
}

export default App;
