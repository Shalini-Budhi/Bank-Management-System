import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import HomeTabData from "../HomeTabData/HomeTabData";
import AccountsData from "../../AccountsData/AccountsData";

export default function HomeTabDashboard() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const Tabs = [
  //   {
  //     tabName: "Accounts",
  //     tabValue: <AccountsTab />,
  //   },
  //   {
  //     tabName: "Accounts",
  //     tabValue: <AccountsTab />,
  //   },
  //   {
  //     tabName: "Accounts",
  //     tabValue: <AccountsTab />,
  //   },
  //   {
  //     tabName: "Accounts",
  //     tabValue: <AccountsTab />,
  //   },
  //   {
  //     tabName: "Accounts",
  //     tabValue: <AccountsTab />,
  //   },
  // ];

  return (
    <>
      <h4>NavBar</h4>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Home" value="1" />
              <Tab label="Accounts" value="2" />
              <Tab label="Send Money" value="3" />
              <Tab label="Cards" value="4" />
              <Tab label="FD/RD" value="5" />
              <Tab label="Bills & Recharge" value="6" />
              <Tab label="Loans" value="7" />
              <Tab label="Invest" value="8" />
              <Tab label="Insure" value="9" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <HomeTabData />
          </TabPanel>
          <TabPanel value="2">
            <AccountsData />
          </TabPanel>
          <TabPanel value="3">Send Money Component</TabPanel>
          <TabPanel value="4">Cards Component</TabPanel>
          <TabPanel value="5">FD/RD</TabPanel>
          <TabPanel value="6">Bills & Recharge </TabPanel>
          <TabPanel value="7">Loans</TabPanel>
          <TabPanel value="8">Invest</TabPanel>
          <TabPanel value="9">Insure</TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
