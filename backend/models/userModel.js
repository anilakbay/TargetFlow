const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"], // Custom error message for name field
    },
    email: {
      type: String,
      required: [true, "Please add an email"], // Custom error message for email field
      unique: true, // Ensures email is unique
      match: [/.+\@.+\..+/, "Please add a valid email address"], // Regex for email validation
    },
    password: {
      type: String,
      required: [true, "Please add a password"], // Custom error message for password field
      minlength: [6, "Password must be at least 6 characters long"], // Minimum length validation
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

// Export the User model based on the schema
module.exports = mongoose.model("User", userSchema);
