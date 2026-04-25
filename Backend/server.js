const mongoose = require("mongoose");
require("dotenv").config();
const bcrypt = require("bcrypt");
const { connectDB } = require("./src/config/config");
const app = require("./src/app");

connectDB();

app.listen(3000, () => {
  console.log("Server stared check now");
});