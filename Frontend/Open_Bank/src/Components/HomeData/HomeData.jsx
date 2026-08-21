import "./HomeData.css";
import CardActions from "@mui/material/CardActions";
import QuickLinksCard from "../ui/QuickLinksCard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountBalanceSharpIcon from "@mui/icons-material/AccountBalanceSharp";
import CurrencyExchangeSharpIcon from "@mui/icons-material/CurrencyExchangeSharp";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import PercentIcon from "@mui/icons-material/Percent";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import React, { useEffect } from "react";
import "../Home/Home.css";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import TvIcon from "@mui/icons-material/Tv";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import axios from "axios";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  MenuItem,
  Button,
  Box,
  Link,
  FormControl,
} from "@mui/material";
import { useState } from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import HomeIcon from "@mui/icons-material/Home";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import { NavLink } from "react-router-dom";

import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import moment from "moment";

export default function HomeData() {
  const cardsData = [
    {
      productName: "Don’t let your personal loan offer get away",
      applyNow: "applyNow",
    },

    {
      productName: "Ride in Style with our Two-Wheeler Loan",
      applyNow: "applyNow",
    },
    {
      productName: "Discover Your Loan Options",
      applyNow: "Explore All Loans",
    },
  ];

  const favoriteLinksData = [
    {
      img: <AccountBalanceWalletIcon />,
      to: "#",
      name: "Open a Savings Account",
    },
    {
      img: <AccountBalanceSharpIcon />,
      to: "#",
      name: "Cash, Cheque & Demand Draft",
    },
    {
      img: <CurrencyExchangeSharpIcon />,
      to: "#",
      name: "Foreign Currency Inwad Remittance",
    },
    {
      img: <AddHomeWorkIcon />,
      to: "#",
      name: "Open a Deposit",
    },
    {
      img: <PercentIcon />,
      to: "#",
      name: "View FD Intrest Rates",
    },
    {
      img: <EnhancedEncryptionIcon />,
      to: "#",
      name: "Safe Deposit Lockers",
    },
  ];

  const QuickLinksdata = [
    {
      label: "Inward Remitance",
      icon: <AttachMoneyIcon fontSize="small" />,
      Description: "Foreign Currency disposal",
    },
    {
      label: "Remit Now",
      icon: <CurrencyRupeeIcon fontSize="small" />,
      Description: "Send money Aborad",
    },
    {
      label: "Home Loan",
      icon: <HomeIcon fontSize="small" />,
      Description: "Flexible interest rates",
    },
    {
      label: "Health Insurance",
      icon: <HealthAndSafetyOutlinedIcon fontSize="small" />,
      Description: "your health security",
    },
    {
      label: "Personal Loan",
      icon: <VolunteerActivismOutlinedIcon fontSize="small" />,
      Description: "Loan in 10s",
    },
    {
      label: "Life Insurance",
      icon: <AddLocationAltOutlinedIcon fontSize="small" />,
      Description: "For your loved ones",
    },
  ];

  const RechargeOptions = [
    { label: "Mobile", icon: <PhoneAndroidIcon fontSize="small" /> },
    { label: "FASTAG", icon: <DirectionsCarFilledIcon fontSize="small" /> },
    { label: "DTH", icon: <TvIcon fontSize="small" /> },
  ];

  const [value, setValue] = React.useState("1");

  const handleRechargeChange = (event, newValue) => {
    setValue(newValue);
  };

  const [mobile, setMobile] = useState("");

  const handleChange = (e) => {
    // Allow only numbers
    const value = e.target.value;
    setMobile(value);
  };

  const handleSubmit = () => {
    if (mobile.length !== 10) {
      alert("Enter a valid 10-digit mobile number");
      return;
    }
    console.log("Mobile:", mobile);
  };

  // const userName = localStorage.getItem("userName");
  const userName = "madhava hardcode array"

  let formattedName = userName.split("@")[0].trim().toUpperCase();

  async function getCardsApi() {
    const response = await axios.get("http://localhost:3000/cards");
    console.log("response", response);
  }

  useEffect(() => {
    getCardsApi();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-8">
          <div>
            Home Welcome, {formattedName} Last logged in at{" "}
            {moment().format("MMMM Do YYYY, h:mm:ss a")}
          </div>

          <div className="flex-container">
            <button className="homeBtn">Accounts</button>
            <button className="homeBtn">Cards</button>
            <button className="homeBtn">FD/RD</button>
            <button className="homeBtn">Loans</button>
            <button className="homeBtn">Invest</button>
            <button className="homeBtn">Accinsureounts</button>
          </div>

          <div className="card-container">
            {cardsData.map((ele) => {
              return (
                <>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography
                        gutterBottom
                        sx={{ color: "text.secondary", fontSize: 14 }}
                      >
                        {ele.productName}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button> {ele.applyNow}</Button>
                    </CardActions>
                  </Card>
                </>
              );
            })}
          </div>
        </div>
        <div className="col-4">
          <h5>My Favourite Links</h5>
          <QuickLinksCard quickLinks={favoriteLinksData} />
        </div>
        <div className="send-money-card">
          <Card sx={{ width: "800px" }}>
            <CardContent>
              <div className="send-money-container">
                <Box mb={4}>
                  <h4 style={{ marginLeft: "16px" }}>Send Money</h4>
                </Box>
                {/* Dropdown Row */}
                <Box mt={2}>
                  <TextField
                    select
                    defaultValue="domestic"
                    sx={{
                      "& .MuiOutlinedInput-input": {
                        padding: "10px 15px",
                      },
                      width: 300,
                      marginBottom: "10px",
                      marginLeft: "15px",
                    }}
                  >
                    <MenuItem value="domestic">Domestic</MenuItem>
                    <MenuItem value="international">International</MenuItem>
                  </TextField>
                </Box>

                <span className="quickLink_img_icon">test Image</span>
                <NavLink className="quickLink_name">Add Payeee</NavLink>
                <span className="arrow_forward_icon">
                  <ArrowForwardIosSharpIcon />
                </span>
              </div>
              <Box mt={2} display="flex" gap={2}>
                {/* <TextField
                  label="To"
                  sx={{
                    "& .MuiOutlinedInput-input": {
                      padding: "10px 15px",
                    },
                    flex: 2,
                    marginLeft: "15px",
                  }}
                > */}
                {/* <FormControl>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={20}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl> */}
                {/* </TextField> */}

                <FormControl
                  sx={{
                    "& .MuiOutlinedInput-input": {
                      padding: "10px 15px",
                    },
                  }}
                >
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={20}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  label="From"
                  sx={{
                    "& .MuiOutlinedInput-input": {
                      padding: "10px 15px",
                    },
                    flex: 1,
                    marginLeft: "15px",
                  }}
                ></TextField>
                <TextField
                  label="Amount"
                  type="number"
                  sx={{
                    "& .MuiOutlinedInput-input": {
                      padding: "10px 15px",
                    },
                    flex: 1,
                    marginLeft: "15px",
                  }}
                ></TextField>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    border: "1px solid blue",
                    color: "blue",
                    flex: 1,
                    marginLeft: "15px",
                  }}
                >
                  Proceed
                </Button>
              </Box>
            </CardContent>
          </Card>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Box sx={{ textAlign: "left-side", marginLeft: 3, marginTop: 5 }}>
              <h5>Quick Recharge</h5>
            </Box>

            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleRechargeChange}
                    aria-label="lab API tabs example"
                  >
                    {RechargeOptions.map((ele, index) => (
                      <Tab
                        label={ele.label}
                        value={ele.value}
                        key={index}
                        textAlign="center"
                        sx={{
                          cursor: "pointer",
                          p: 1,
                          borderRadius: 2,
                          width: 80,
                          "&:hover": { backgroundColor: "#f5f5f5" },
                        }}
                      >
                        {ele.icon}
                        <div>{ele.label}</div>
                      </Tab>
                    ))}
                  </TabList>
                </Box>
                <TabPanel value={0}>
                  {" "}
                  <Box sx={{ marginLeft: 1, marginRight: 1 }}>
                    <label>Enter Mobile Number</label>
                    <TextField
                      value={mobile}
                      onChange={handleChange}
                      inputProps={{ maxLength: 10 }}
                      size="small"
                    />
                  </Box>
                </TabPanel>
                <TabPanel value={1}>
                  {" "}
                  <Box sx={{ marginLeft: 1, marginRight: 1 }}>
                    <label>Enter Fastag </label>
                    <TextField
                      value={mobile}
                      onChange={handleChange}
                      inputProps={{ maxLength: 10 }}
                      size="small"
                    />
                  </Box>
                </TabPanel>
                <TabPanel value={2}>
                  {" "}
                  <Box sx={{ marginLeft: 1, marginRight: 1 }}>
                    <label>Enter Vehicle Number</label>
                    <TextField
                      value={mobile}
                      onChange={handleChange}
                      inputProps={{ maxLength: 10 }}
                      size="small"
                    />
                  </Box>
                </TabPanel>
              </TabContext>
            </Box>

            <Box mt={3} display="flex" alignItems="flex-end" gap={4}>
              <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{ height: "40px", marginLeft: 2 }}
              >
                Proceed
              </Button>
            </Box>
          </div>
          <div className="col-md-6">
            <Box sx={{ textAlign: "left-side", marginLeft: 3, marginTop: 5 }}>
              <h5>Quick Links</h5>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 2,
                mt: 1,
              }}
            >
              {QuickLinksdata.map((ele, index) => (
                <Box
                  key={index}
                  sx={{
                    textAlign: "center",
                    p: 2,
                    borderRadius: 3,
                    cursor: "pointer",
                    backgroundColor: "#fff",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                    "&:hover": {
                      // transform: "translateY(-2px)",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <Box sx={{ fontSize: 24, color: "#6c63ff" }}>{ele.icon}</Box>

                  <Box sx={{ fontSize: 12, mt: 1 }}>
                    {ele.label}, {ele.Description}
                  </Box>
                </Box>
              ))}
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}
