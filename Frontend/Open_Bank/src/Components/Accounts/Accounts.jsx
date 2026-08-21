import QuickLinksCard from "../ui/QuickLinksCard";
import "./Accounts.css";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountBalanceSharpIcon from "@mui/icons-material/AccountBalanceSharp";
import CurrencyExchangeSharpIcon from "@mui/icons-material/CurrencyExchangeSharp";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import PercentIcon from "@mui/icons-material/Percent";
import CustomCardUi from "../ui/CustomCardUi";
import Button from "@mui/material/Button";

export default function Accounts() {
  const quickLinksData = [
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

  const ExistedAccountsData = [
    {
      icon: "",
      type: "Savings A/c",
      name: "Madhava",

      balance: "From BE",
      available: "Availabe Balance",
    },
    {
      icon: "",
      type: "Savings A/c",
      name: "Madhava",

      balance: "From BE",
      available: "Availabe Balance",
    },
  ];

  const cards = [
    {
      icon: "AccountBalanceWalletOutlinedIcon",
      account_number: "Savings A/c ******** 6753",
      holderName: "MADHAVA",
      amount: "₹4,158.92",
      amountLabel: "Available Balance",
    },
    {
      icon: "AccountBalanceWalletOutlinedIcon",
      account_number: "Savings A/c ******** 6753",
      holderName: "MADHAVA",
      amount: "₹4,158.92",
      amountLabel: "Available Balance",
    },
  ];

  return (
    <>
      <h4>Accounts</h4>
      <div className="row">
        <div className="col-md-8">
          <CustomCardUi cards={cards} />
        </div>
        <div className="col-md-4">
          <h4>Quick Links</h4>
          <QuickLinksCard quickLinks={quickLinksData} />
        </div>
      </div>
    </>
  );
}
