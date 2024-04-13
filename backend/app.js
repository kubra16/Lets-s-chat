const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const chats = require("./data/data");
const connectDB = require("./config/db");

dotenv.config();
const app = express();
connectDB();

const base_url = process.env.BASE_URL;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user", userRoutes);

// mongoose
//   .connect(base_url, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Error connecting to MongoDB", err));

app.listen(5000, () => {
  console.log("App listening on port 5000");
});
