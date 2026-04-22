import React from "react";
import "../Login/Login.css";
import hdfcProductImage from "../../Images/hdfcleft.png";
import CustomTabs from "../CustomTabs/CustomTabs";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import NetBankingLoginForm from "../NetBankingLoginForm/NetBankingLoginForm";
import NetBankingCreditCard from "../NetBankingCreditCard/NetBankingCreditCard";
export default function Login() {
  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    function a11yProps(index) {
      return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
      };
    }

    return (
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Perosnal Banking" {...a11yProps(0)} />
            <Tab label="Credit Cards/loans Only" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <NetBankingLoginForm />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <NetBankingCreditCard />
        </CustomTabPanel>
      </Box>
    );
  }
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <img src={hdfcProductImage} style={{ width: "828px" }} />
        </div>

        <div className="col-md-6">
          Welcome to NetBanking
          <BasicTabs />
        </div>
      </div>
    </>
  );
}
