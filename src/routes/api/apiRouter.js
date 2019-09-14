/**
 * routes/apiRoutes/apiRouter.js
 *
 * @description: This file contain all the routes for API requests e responses
 *
 */

const express = require("express");
const router = express.Router();

// modules import
const userRoutes = require("./user");
const linhaRoutes = require("./linha");

// Routing
router.use("/user", userRoutes);
router.use("/linha", linhaRoutes);

module.exports = router;
