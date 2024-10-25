const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/dbConnect");
const userRoutes = require("./routes/user.routes");
const billingRoutes = require("./routes/billing.routes"); // Import billing routes

dotenv.config();
const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/users", userRoutes);
app.use("/api/billings", billingRoutes); // Register billing routes

// Health Check Route
app.get("/", (req, res) => {
  res.send("Backend Server is Running!");
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
