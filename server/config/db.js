import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Database Connect");
  } catch (err) {
    console.log(`Database Error: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
