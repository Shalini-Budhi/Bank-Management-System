const http = require("http");
const express = require("express");
const cors = require("cors");
const { load,login, signup, authMiddleWare,dashboard, holdings, funds, userData } = require("./routes/routes");
const app = express();
app.use(express.json());


const corsOptions = {
  origin: "*", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

app.get("/", load);

app.post("/login", login);

app.post("/signup", signup);

app.get("/userData", userData)

module.exports = app;
