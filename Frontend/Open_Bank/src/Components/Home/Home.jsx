import React from "react";
import "../Home/Home.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomTabs from "../CustomTabs/CustomTabs";
import CustomTabsUi from "../ui/CustomTabsUi";
import Accounts from "../Accounts/Accounts";
import CardsData from "../CardsData/CardsData";
import HomeData from "../HomeData/HomeData";
import SendMoney from "../SendMoney/SendMoney";
import Bills_Recharge from "../Bills_Recharge/Bills_Recharge";
import Loans from "../Loans/Loans";
import Invest from "../Invest/Invest";
import Insure from "../Insure/Insure";
import Fd_Rd from "../Fd_Rd/Fd_Rd";



export default function Home() {
  const tabsData = [
    {
      name: "Home",
      component: <HomeData />,
    },
    {
      name: "Accounts",
      component: <Accounts />,
    },
    {
      name: "Send Money",
      component: <SendMoney />,
    },
    {
      name: <CardsData />,
      component: "HomeData Tabs",
    },
    {
      name: "FD/RD",
      component: <Fd_Rd/>
    },
    {
      name: "Bills & Recharge",
      component: <Bills_Recharge />,
    },
    {
      name: "Loans",
      component: <Loans />,
    },
    {
      name: "Invest",
      component: <Invest />,
    },
    {
      name: "Insure",
      component: <Insure />,
    },
  ];

  return (
    <>
      <div className="container-fluid">
        <CustomTabsUi tabs={tabsData} />
      </div>
    </>
  );
}
