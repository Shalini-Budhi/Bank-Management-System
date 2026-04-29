const SignUpSchema = require("../models/SignupSchema");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
exports.load = async (req, res) => {
  res.send("Hi Girisha");
};

exports.login = async (req, res) => {
  const { CustomerID, Password } = req.body;
  console.log(CustomerID, Password, "usererkjfhskjhfs");
  const userObj = await SignUpSchema.findOne({ CustomerID: CustomerID });

  console.log("userObj", userObj);
  const userPassword = await bcrypt.compare(Password, userObj.Password);
  console.log(userPassword, "userPassword");

  const token = jwt.sign(
    {
      userID: userObj.id,
      CustomerID: userObj.CustomerID,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "5h" },
  );
  res.json({
    access_token: token,
    CustomerID: userObj.CustomerID,
    message: "login successful",
  });
  try {
    if (!userObj) {
      return res.json({ message: "Invalkid credentails" });
    }

    if (CustomerID === userObj?.CustomerID) {
      return res.json({
        CustomerID,
        Password,
        message: "user fetched succesfully",
      });
      console.log(userObj.CustomerID, "userObj");
    } else {
      return res.json({ message: "invalid CustomerID address" });
    }
  } catch (error) {
    return res.json({ message: "invalid credentials" });
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

// user singup ---- signupSchema --- data ikkda store chestunam

// loginSchema add chestunam ---login
