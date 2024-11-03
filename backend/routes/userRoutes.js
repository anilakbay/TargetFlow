const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

// Register a new user
router.post("/", registerUser);

// Log in a user
router.post("/login", loginUser);

// Get logged in user data
router.get("/me", protect, getMe); // Protect route with middleware

module.exports = router;
