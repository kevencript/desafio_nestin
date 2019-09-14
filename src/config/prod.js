/**
 *
 * src/config/dev.js
 *
 * @description: All the keys need to be setted at the Heroku environment (or another) to
 * work correctly. This file needs to be commited, instead of dev.js keys
 *
 */

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY
};
