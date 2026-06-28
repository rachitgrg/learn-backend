import mongoose from "mongoose";
// import DB_Name
import { DB_Name } from "../constants.js";

// connect DB
// It is always good to use Asyync-await when dealing with Databases because it takes data some time to reach
// Alwats assume that data is in another continent..
const connectDB = async () => {
  // always use try and catch block when dealing with db
  try {
    // it hold the response after getting the connection
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI} / ${DB_Name}`
    );
    console.log(`DataBase Connected !! DB Host : ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MongoDb Connection error", error);
    process.exit(1);
  }
};

export default connectDB;
