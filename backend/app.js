const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const chats = require("./data/data");

dotenv.config();
const app = express();

const base_url = process.env.BASE_URL;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  console.log(req.params.id);
  const singleChat = chats.chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

mongoose
  .connect(base_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

app.listen(5000, () => {
  console.log("App listening on port 5000");
});
