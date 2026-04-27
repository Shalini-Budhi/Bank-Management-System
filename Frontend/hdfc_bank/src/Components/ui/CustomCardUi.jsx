import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

export default function CustomCardUi({ cards }) {
  return (
    <Card className="main_customs_card" sx={{ width: "100%" }}>
      <p>Total Available Balance</p>
      <h5>$4,158.92 from BE</h5>
      {cards.map((card) => {
        return (
          <>
            <CardContent className="card_content_accounts_data">
              <Box>icon</Box>
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  {card.account_number}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.holderName}
                </Typography>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <Box textAlign="right">
                <Typography variant="subtitle1" fontWeight="bold">
                  {card.amount}
                  <ArrowForwardIosSharpIcon />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.amountLabel}
                </Typography>
              </Box>
            </CardContent>
          </>
        );
      })}

      {/* Optional Action (like button / arrow) */}
    </Card>
  );
}
