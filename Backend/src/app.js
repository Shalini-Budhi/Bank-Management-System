const http = require("http");
const express = require("express");
const cors = require("cors");
const { load,login, signup, authMiddleWare,dashboard, holdings, funds } = require("./routes/routes");
const app = express();
app.use(express.json());
const homeRoutes = require("./routes/homeRoutes");
const accountRoutes = require("./routes/accountRoutes");

const corsOptions = {
  origin: "*", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

app.get("/", load);

app.post("/login", login);

app.post("/signup", signup);
app.use("/api/home", homeRoutes);
app.use("/api/accounts", accountRoutes);

module.exports = app;
