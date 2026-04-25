import { NavLink } from "react-router-dom";
import "./HomeTabData.css";
import CustomTabsUi from "../../ui/CustomTabsUi";
import AccountsData from "../../AccountsData/AccountsData";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function HomeTabData() {
  const tabsData = [
    { label: "Accounts", value: "1", content: <AccountsData /> },
    { label: "Cards", value: "2", content: "Cards " },
    { label: "Loans", value: "3", content: "Loans" },
    { label: "FR/RD", value: "4", content: "FR/RD " },
    { label: "Loans", value: "5", content: "Loans" },
    { label: "Invest", value: "6", content: "Invest " },
    { label: "Insure", value: "7", content: "Insure " },
  ];

  return (
    <>
      <div className="userName_flex">
        <div>
          <h3>Welcome UserName From backend</h3>
          <p>Last Logged In From RealTiem  </p>
        </div>
        <span>Special Offers for you</span>
      </div>

      <div className="tabs_favourite_grid">
        <div className="tabs_grid_data">
          <span>Show Balance</span>
          <FormControlLabel control={<Switch />} />
          <CustomTabsUi tabs={tabsData} />
        </div>
        <div className="favourite_grid_data">
          <h2>My Favourite Links </h2>
          <hr />
          <a href="#">Account StateMent</a>
          <hr />
          <a href="#">Open FD</a>
          <hr />
          <a href="#">Download FD Summary</a>
          <hr />
          <a href="#">Sweep-in/ OD Against FD</a>
          <hr />
          <a href="#">CASA Interest Certificate</a>
          <hr />
          <h5>Add & Edit Links</h5>
        </div>
      </div>
    </>
  );
}
