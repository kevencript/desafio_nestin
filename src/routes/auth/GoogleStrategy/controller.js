/**
 * routes/Auth/GoogleStrategy/index.js
 *
 * @description: This file contain all the logic and interaction
 *
 */

const passport = require("passport");

// First authentication step
exports.login_google = passport.authenticate("google", {
  scope: ["profile", "email"]
});

// Rota para o tratamento do callback
exports.callback_google = passport.authenticate("google");
