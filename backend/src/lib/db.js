import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
export const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL ,
    );
    console.log("database is connected");
  } catch (error) {
    console.error("database connection is failed", error.message);
  }
};
