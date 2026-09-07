const mongoose = require("mongoose");
const dns = require("dns");

// Resolve SRV records using public DNS to prevent querySrv ECONNREFUSED
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connection Successful");
  } catch (error) {
    console.error("MongoDB Connection Error: ", error);
    process.exit(1);
  }
};

module.exports = connectDB;
