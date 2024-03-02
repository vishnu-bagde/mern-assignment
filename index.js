const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const customerRoutes = require("./routes/customerRoutes");
const transactionRoutes = require("./routes/transactionRoutes");

const app = express();
const PORT = process.env.PORT || 8080;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use(express.json());

// making default route
app.get("/", (req, res) => {
  res.send("working");
});

// Routes
app.use("/", customerRoutes);
app.use("/", transactionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
