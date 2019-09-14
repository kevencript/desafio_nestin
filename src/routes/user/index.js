/**
 * routes/Auth/GoogleStrategy/index.js
 *
 * @description: This file contains all the requisitions for User handling
 *
 */

const express = require("express");
const router = express.Router();

// controller import
const controller = require("./controller");

// @route    GET /api/user/logout
// @desc     set cookie to default and kill the session that contains user ID
// @acess    Public
router.get("/logout", controller.logout);

// @route    GET /api/user/current
// @desc     return the current logged user infos
// @acess    Public
router.get("/current", controller.current_user);

module.exports = router;
