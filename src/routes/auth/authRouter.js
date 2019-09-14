/**
 * routes/authRoutes/authRouter.js
 *
 * @description: This file contain all the routes for authentication handle
 *
 */

const express = require("express");
const router = express.Router();

// modules import
const googleStrategyRoutes = require("./GoogleStrategy");

// Routing
router.use("/google", googleStrategyRoutes);

module.exports = router;
