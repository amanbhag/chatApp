const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const jwt = require("jsonwebtoken");
var cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT"],
    credentials: true,
  })
);

const jwtToken = process.env.JWT_SECRET;

mongoose
  .connect(process.env.mongoUrl)
  .then(() => {
    console.log("db connected succcessfully");
  })
  .catch((ex) => {
    console.log("ex: ", ex);
  })
  .catch("");
app.get("/test", (req, res) => {
  res.json("test: ok");
});
app.post("/register", async (req, res) => {
  let { username, password } = req.body;

  console.log("username, password: ", username, password);
  const newUser = new User({
    username,
    password,
  });
  newUser.save();
  const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);
  res.cookie("token", token, { httpOnly: true });
  res.json({ id: newUser._id });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
