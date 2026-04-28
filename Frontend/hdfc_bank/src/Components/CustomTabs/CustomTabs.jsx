import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CustomCard from "../CustomCard/CustomCard";

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

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CustomTabs() {
  const [value, setValue] = React.useState(0);
  const TrendingCardData = "LOAN ON CREDIT CARD ";
  const AccountsCardData = "Savings Account";

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const data = [
    {
      label: "Home",
    },
    {
      label: "Accounts",
    },
    {
      label: "Send Money",
    },
    {
      label: "Cards",
    },
    {
      label: "FD/RD",
    },
    {
      label: "Bills and Rechargs",
    },
    {
      label: "Loans",
    },
    {
      label: "invest",
    },
    {
      label: "insure",
    },
  ];

  function displayTabs() {
    return data.map((ele, index) => {
      return <Tab label={ele.label} {...a11yProps({ index })} />;
    });
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {displayTabs()}
        </Tabs>
      </Box>

      {data.map((ele, index) => {
        return (
          <CustomTabPanel value={value} index={index}>
            <CustomCard
              value={value}
              label={ele.label}
              data={TrendingCardData}
            />
          </CustomTabPanel>
        );
      })}

      <CustomTabPanel value={value} index={1}>
        <CustomCard value={value} label="Accounts" data={AccountsCardData} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <CustomCard value={value} label="Deposits" />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <CustomCard value={value} label="Cards" />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <CustomCard value={value} label="Loans" />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <CustomCard value={value} label="Insurance" />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <CustomCard value={value} label="Investments" />
      </CustomTabPanel>
    </Box>
  );
}
