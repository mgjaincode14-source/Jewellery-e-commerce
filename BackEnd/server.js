const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

/* ===========================
   MongoDB Connection
=========================== */
mongoose.connect("mongodb://127.0.0.1:27017/ppcollections")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));

/* ===========================
   User Schema
=========================== */
const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  username: String,
  password: String,
  otp: String,
  otpExpires: Date
});

const User = mongoose.model("User", userSchema);

/* ===========================
   Nodemailer Setup
=========================== */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

/* ===========================
   SEND OTP
=========================== */
app.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  if (!email)
    return res.status(400).json({ message: "Email required" });

  try {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = new Date(Date.now() + 5 * 60 * 1000);

    let user = await User.findOne({ email });

    if (!user) {
      user = new User({ email, otp, otpExpires });
    } else {
      user.otp = otp;
      user.otpExpires = otpExpires;
    }

    await user.save();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "OTP for P.P Collections",
      text: `Your OTP is ${otp}`
    });

    res.status(200).json({ message: "OTP sent successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error sending OTP" });
  }
});

/* ===========================
   VERIFY OTP
=========================== */
app.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "User not found" });
    if (user.otp !== otp)
      return res.status(400).json({ message: "Invalid OTP" });
    if (user.otpExpires < new Date())
      return res.status(400).json({ message: "OTP expired" });

    user.otp = null;
    user.otpExpires = null;
    await user.save();

    res.status(200).json({ message: "OTP verified successfully" });

  } catch (error) {
    res.status(500).json({ message: "Verification failed" });
  }
});

/* ===========================
   CREATE ACCOUNT
=========================== */
app.post("/create-account", async (req, res) => {
  try {
    const { email, name, username, password } = req.body;

    if (!email || !name || !username || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Email not verified" });

    const hashedPassword = await bcrypt.hash(password, 10);

    user.name = name;
    user.username = username;
    user.password = hashedPassword;

    await user.save();

    res.status(200).json({ message: "Account created successfully 🎉" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating account" });
  }
});

/* ===========================
   LOGIN
=========================== */
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res.status(400).json({ message: "All fields required" });

    const user = await User.findOne({ username });

    if (!user)
      return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign(
      { id: user._id, username: user.username },
      "SECRETKEY123",
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      username: user.username
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Login failed" });
  }
});

/* ===========================
   SERVER
=========================== */
app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});