import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function ExploreCards(props) {
  console.log("elesjdfjsgfdh", props);
  return (
    <Box sx={{ minWidth: 275 }} >
      <Card
        style={{
          width: "250px",
          background: "green",
          borderRadius: "15px",
          marginLeft: "20px",
          marginTop: "30px",
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            {props.ele}
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
            adjective
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
