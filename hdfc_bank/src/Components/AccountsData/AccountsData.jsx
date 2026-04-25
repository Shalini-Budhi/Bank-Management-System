import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./AccountsData.css"

const cards = [
  {
    id: 1,
    logo: "img1 ",
    arraow: " →",
    description: "No of Savings Accounts XXXXXXXX",
    button: "Get Statement",
  },
  {
    id: 2,
    arraow: " →",
    description: "Split Your Credit Card bill Pay in Parts",
    button: "Convert Now",
  },
  {
    arraow: " →",
    id: 3,
    description: "Set Limit & Control Your Credit Card Usage",
    button: "Manage Now >>",
  },
];

function AccountsData() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
        gap: 2,
      }}
    >
      {cards.map((card, index) => (
        <Card key={card.id}>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "100%",
              "&[data-active]": {
                backgroundColor: "action.selected",
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <CardContent sx={{ height: "100%" }}>
              <div className="img-arrow-flex">

              <img src="" alt="Img1" />
              <p>{card.arraow}</p>
              </div>
              
              <Typography variant="body2" className="account_data_description">
                {card.description}
              </Typography>
              <button>{card.button}</button>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default AccountsData;
