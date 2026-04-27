const mongoose = require("mongoose");

const userLoginSchema = new mongoose.Schema({
  Custo: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("userLoginSchema", userLoginSchema);
