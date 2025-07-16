import mongoose from "mongoose";
const URI = process.env.MONGODB_URI;
const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("✅ Connected to MongoDB");
    // await mongoose.connection.db.collection("cars").dropIndex("email_1");
    // console.log("Dropped unique index on 'email' in cars collection");
    
    // await mongoose.disconnect();
  } catch (error) {
    console.log("Connection to databasse FAILED :", error.message);
    process.exit(0);
  }
};
export default connectDb;
