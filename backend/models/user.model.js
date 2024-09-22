const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please tell us your name!"],
    minLength: 6,
    unique: true,
    trim: true,
    lowercase: true,
  },
  firstName: {
    type: String,
    required: [true, "First name is required"],
    minLength: 6,
    trim:true,
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    minLength: 6,
    trim:true
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
