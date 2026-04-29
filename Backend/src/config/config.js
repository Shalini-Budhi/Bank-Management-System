import mongoose from "mongoose";

const url =
  "mongodb+srv://practicalcodewithshiva_db_user:test%40123@mernstackbatch6.urbkund.mongodb.net/"

export const connectDB = async () => {
  try {
    console.log("url", process.env.MONGODB_URL);
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Server Started up");
  } catch (error) {
    console.error("MongoDB Connection Error: " + error);
  }
};