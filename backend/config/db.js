const { Pool } = require("pg");
require("dotenv").config();
const logger = require("../utils/logger"); // Ensure this path is correct

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Test the database connection with detailed logging
pool.connect()
  .then(client => {
    logger.info("✅ Database connected successfully");
    client.release(); // Release the client
  })
  .catch(err => {
    logger.error(`❌ Database connection failed: ${err.message}`);
    logger.error(`🔍 Detailed Error: ${err.stack}`);
  });

module.exports = pool;
