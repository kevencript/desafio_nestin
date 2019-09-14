/**
 * routes/Auth/GoogleStrategy/index.js
 *
 * @description: This file contains all the requisitions for GoogleOAuth20
 */

const express = require("express");
const router = express.Router();

// controller import
const controller = require("./controller");

// @desc     redirecting user for google servers to grant permissions to access his informations
// @route    GET /auth/google
// @acess    Public
router.get("/", controller.login_google);

// @desc     Handle the callback sended by google with permission code to access user informations
// @route    GET /auth/google/callback
// @acess    Public
router.get("/callback", controller.callback_google);

module.exports = router;
