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
const insuranceRoute = require("./routes/insuranceRoutes")
const sendMoney = require("./routes/sendMoneyRoute");
const { frrd } = require("./routes/frRDroute");

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

app.get("/api/billsrecharge", billsandRecharge);

app.get("/loans", loansApi);
app.get("/investments", investApi);
app.use("/insurance", insuranceRoute)
app.get("/sendmoney", sendMoney)
app.get("/frrd", frrd)


// app.get("/userData", userData)

module.exports = app;
