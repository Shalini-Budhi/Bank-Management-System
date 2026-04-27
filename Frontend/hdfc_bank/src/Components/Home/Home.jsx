import React from "react";
import "../Home/Home.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomTabs from "../CustomTabs/CustomTabs";

export default function Home() {
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
  return (
    <>
      <div className="container-fluid">
        <CustomTabs />
        <div>
          Home Welcome, v siva kumar Last logged in at 25/04/26, 10:12 am
        </div>
        {/* layout ? 6 items ? buttons */}
        <div className="flex-container">
          <button className="homeBtn">Accounts</button>
          <button className="homeBtn">Cards</button>
          <button className="homeBtn">FD/RD</button>
          <button className="homeBtn">Loans</button>
          <button className="homeBtn">Invest</button>
          <button className="homeBtn">Accinsureounts</button>

          {/* Layput ? grid  3 items gap 10px */}
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
    </>
  );
}

// 3 cards

// 3 arrays [0]1 2
