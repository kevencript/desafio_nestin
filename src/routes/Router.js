/**
 * routes/Router.js
 *
 * @description: This file contain the main Routers of the application
 *
 */

const express = require("express");
const router = express.Router();

// modules import
const authRouter = require("./auth/authRouter");
const apiRouter = require("./api/apiRouter");

// Routing
router.use("/api", apiRouter);
router.use("/auth", authRouter);

module.exports = router;
