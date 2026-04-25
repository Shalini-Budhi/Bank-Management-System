const mongoose = require("mongoose");

const SignUpSchema = new mongoose.Schema({
  UserName: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: mongoose.Schema.Types.Union, of: [String, Number],
    required: true,
  },
  CustomerID: {
    type: mongoose.Schema.Types.Union, of: [String, Number],
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  Password: {
   type: mongoose.Schema.Types.Union, of: [String, Number],
    required: true,
  },
});

module.exports = mongoose.model("SignUpSchema", SignUpSchema);
