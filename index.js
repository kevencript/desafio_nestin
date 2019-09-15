const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const { mongoURI, cookieKey } = require("./src/config/keys");

requireDir("./src/models"); // Models requiring
const Router = require("./src/routes/Router"); // Router importing
require("./src/services/passport"); // PassportJs config

// MongoDB connection (
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.use(cors());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey]
  })
);

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

app.use("/", Router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
