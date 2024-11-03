const mongoose = require("mongoose");

// Define the goal schema
const goalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", // Reference to the User model
    },
    text: {
      type: String,
      required: [true, "Please add a text value"], // Custom error message
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

// Export the Goal model based on the schema
module.exports = mongoose.model("Goal", goalSchema);
