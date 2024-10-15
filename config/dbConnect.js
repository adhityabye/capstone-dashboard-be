const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const uri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await MongoTopologyClosedError.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "capstone-backend",
    });
  } catch (e) {
    console.error("Database connection failed:", e);
    process.exit(1);
  }
};

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
  process.exit(1);
});

module.exports = { connectDB, uri };
