import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CustomCardUi({ cards }) {
  const [totalAccountbal, SetTotalAccountBalance] = useState();
  const [data, setData] = useState([]);
  async function getAccountsApi() {
    const response = await axios.get("http://localhost:3000/api/accounts");
    console.log("account response", response.data.accounts);
    SetTotalAccountBalance(response.data.totalBalance);
    setData(response.data.accounts);

  
  }

  useEffect(() => {
    getAccountsApi();
  }, []);

  // guards ?  &&

  return (
    <Card className="main_customs_card" sx={{ width: "100%" }}>
      <p>Total Available Balance</p>
      <h5>{totalAccountbal} from BE</h5>
      {data &&
        data.map((card) => {
          return (
            <>
              <CardContent className="card_content_accounts_data">
                <Box>icon</Box>
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {card.accountId}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.type}
                  </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box textAlign="right">
                  <Typography variant="subtitle1" fontWeight="bold">
                    {card.balance}
                    <ArrowForwardIosSharpIcon />
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.status}
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
