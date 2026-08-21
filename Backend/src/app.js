const http = require("http");
const express = require("express");
const cors = require("cors");

const { load, login, signup, cards } = require("./routes/routes");
const app = express();
app.use(express.json());
const { homeRouter } = require("./routes/homeRoutes");
const { accountsRouter } = require("./routes/accountRoutes");
const { billsandRecharge } = require("./routes/billsandRecharge");
const { loans, loansApi } = require("./routes/loansRoute");
const { investApi } = require("./routes/investRoute");
const { sendMoney } = require("./routes/sendMoneyRoute");
const { fdrd } = require("./routes/frRDroute");

const { createAccount } = require("./routes/createAccount");

const { insurance } = require("./routes/insuranceRoutes")

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

app.get("/", load);

app.post("/login", login);

app.post("/signup", signup);
app.get("/api/home", homeRouter);
app.get("/api/accounts", accountsRouter);

app.get("/cards", cards);

app.get("/billsrecharge", billsandRecharge);

app.get("/loans", loansApi);
app.get("/investments", investApi);
app.get("/insurance", insurance)
app.get("/sendmoney", sendMoney)
app.get("/fdrd", fdrd)


// crud operations

// create 


app.post("/create-account", createAccount)


// app.get("/userData", userData)

module.exports = app;
