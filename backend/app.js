const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const chats = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddlewares");

dotenv.config();
const app = express();
app.use(express.json());
connectDB();

const base_url = process.env.BASE_URL;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(5000, () => {
  console.log("App listening on port 5000");
});
