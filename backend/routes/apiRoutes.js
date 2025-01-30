const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// Test Route
router.get("/", (req, res) => {
  res.send("API is working!");
});

// Get all users (example route)
router.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
