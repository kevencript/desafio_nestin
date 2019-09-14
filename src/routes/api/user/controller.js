/**
 * routes/Auth/GoogleStrategy/index.js
 *
 * @description: This file contain all the logic and interaction for user stuff
 *
 */

// @route    GET /api/user/logout
// @desc     set cookie to default and kill the session that contains user ID
exports.logout = async (req, res) => {
  const response = await req.logout();
  res.redirect("/");
};

// @route    GET /api/user/logout
// @desc     set cookie to default and kill the session that contains user ID
exports.current_user = (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    res.send({});
  }
};
