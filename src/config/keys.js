/**
 *
 * src/config/keys.js
 *
 * @description:  In this part of the code, we verify wich environment currently are in use,
 * and import the keys according to each environment.
 *
 */

if (process.env.NODE_ENV === "production") {
  // Prodcution environment keys
  module.exports = require("./prod");
} else {
  // Development environment keys
  // @caution! You should not commit this file to GitHub
  module.exports = require("./dev");
}
