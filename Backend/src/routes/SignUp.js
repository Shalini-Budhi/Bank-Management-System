const bcrypt = require("bcrypt");
const SignUpSchema = require("../models/SignupSchema");

// Helper function to generate 12-digit account number (e.g. 7845XXXXXXXX)
const generateAccountNumber = () => {
  const prefix = "7845";
  const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
  return prefix + randomNumber.toString();
};

// User SignUp Controller
exports.SignUp = async (req, res) => {
  try {
    const {
      fullName,
      dob,
      gender,
      mobile,
      email,
      pan,
      address,
      accountType,
      password,
      confirmPassword,
    } = req.body;

    // Check required fields
    if (
      !fullName ||
      !dob ||
      !gender ||
      !mobile ||
      !email ||
      !pan ||
      !address ||
      !accountType ||
      !password ||
      !confirmPassword
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check Password match
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    // Check if email already exists
    const existingEmail = await SignUpSchema.findOne({ email });
    if (existingEmail) {
      return res.status(409).json({
        success: false,
        message: "Email already registered",
      });
    }

    // Check if mobile already exists
    const existingMobile = await SignUpSchema.findOne({ mobile });
    if (existingMobile) {
      return res.status(409).json({
        success: false,
        message: "Mobile number already registered",
      });
    }

    // Check if PAN already exists
    const existingPan = await SignUpSchema.findOne({ pan });
    if (existingPan) {
      return res.status(409).json({
        success: false,
        message: "PAN number already registered",
      });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate Unique Account Number
    let accountNumber = generateAccountNumber();
    let isUnique = false;
    while (!isUnique) {
      const existingAccount = await SignUpSchema.findOne({ accountNumber });
      if (!existingAccount) {
        isUnique = true;
      } else {
        accountNumber = generateAccountNumber();
      }
    }

    // Create User with automatically generated Account Number
    const newUser = new SignUpSchema({
      fullName,
      dob,
      gender,
      mobile,
      email,
      pan,
      address,
      accountType: accountType || "Savings",
      password: hashedPassword,
      accountNumber,
    });

    // Save User to MongoDB
    const savedUser = await newUser.save();

    // Send response with account details
    return res.status(200).json({
      success: true,
      message: "Account created successfully",
      accountNumber: savedUser.accountNumber,
      user: {
        id: savedUser._id,
        fullName: savedUser.fullName,
        email: savedUser.email,
        mobile: savedUser.mobile,
        accountNumber: savedUser.accountNumber,
        accountType: savedUser.accountType,
      },
    });
  } catch (error) {
    console.error("Registration Error:", error);

    return res.status(500).json({
      success: false,
      message: "Registration failed",
      error: error.message,
    });
  }
};

exports.signUp = exports.SignUp;