const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");
const { protect } = require("../middleware/authMiddleware");

// Route for goals
router
  .route("/")
  .get(protect, getGoals) // Get all goals
  .post(protect, setGoal); // Create a new goal

router
  .route("/:id")
  .delete(protect, deleteGoal) // Delete a goal by ID
  .put(protect, updateGoal); // Update a goal by ID

module.exports = router;
