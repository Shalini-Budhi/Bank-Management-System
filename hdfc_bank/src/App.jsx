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

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location, "location");

  return (
    <>
      {location.pathname === "/login" ? (
        <Routes>
          <Route path="/" element={<CustomTabs />} />
          <Route path="/cards" element={<CustomCard />} />
          <Route path="/explore" element={<ExploreAllHdfcBank />} />
          <Route path="/finance" element={<SimplyFinanance />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      ) : (
        <>
          <NavBar />
          <CustomCard />
        </>
      )}
    </>
  );
}

export default App;
