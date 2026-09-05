const SignUpSchema = require("../models/SignupSchema");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

exports.load = async (req, res) => {
  res.send("Hi Girisha");
};

exports.login = async (req, res) => {
  try {
    const { CustomerID, Password } = req.body;

    if (!CustomerID || !Password) {
      return res.status(400).json({
        success: false,
        message: "Please enter Customer ID / Account Number and Password",
      });
    }

    const userObj = await SignUpSchema.findOne({
      $or: [
        { accountNumber: CustomerID },
        { CustomerID: CustomerID },
        { email: CustomerID.toLowerCase() },
        { mobile: CustomerID },
      ],
    });

    if (!userObj) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials. Account not found.",
      });
    }

    const userPasswordHash = userObj.password || userObj.Password;
    let isMatch = false;
    if (userPasswordHash) {
      isMatch = await bcrypt.compare(Password, userPasswordHash);
    }

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password. Please check your credentials.",
      });
    }

    const secretKey = process.env.JWT_SECRET_KEY || "bank_management_jwt_secret_key";
    const token = jwt.sign(
      {
        userID: userObj._id,
        accountNumber: userObj.accountNumber,
        CustomerID: userObj.accountNumber || userObj.CustomerID,
        fullName: userObj.fullName || userObj.fullname,
      },
      secretKey,
      { expiresIn: "5h" }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      access_token: token,
      CustomerID: userObj.accountNumber || userObj.CustomerID || userObj.fullName,
      fullName: userObj.fullName || userObj.fullname,
      accountNumber: userObj.accountNumber,
      accountType: userObj.accountType,
    });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error during login",
    });
  }
};

exports.signup = async (req, res) => {
  const {
    UserName,
    fullname,
    CustomerID,
    Password,
    confirmPassword,
    country,
    mobileNumber,
  } = req.body;

  try {
    const userAccountCreation = new SignUpSchema({
      UserName,
      fullname,
      CustomerID,
      Password,
      confirmPassword,
      country,
      mobileNumber,
    });
    await userAccountCreation.save();
    res.json({ message: "user created succesfully" });
  } catch (error) {
    console.log(error);
  }
};


exports.cards = async (req, res) => {
  const homeArr = [{ anme: "HomeData", location: "Hyd" }];

  try {
    res.json({ message: "fetched Home Data succesfully", data: homeArr });
  } catch (error) {
    console.log(error);
  }
};






