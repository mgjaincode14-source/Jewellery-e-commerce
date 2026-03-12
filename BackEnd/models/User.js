const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },

  username: {
    type: String,
    unique: true,
  },

  password: {
    type: String,
  },

  otp: {
    type: String
  },

  otpExpires: {
    type: Date
  }
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);