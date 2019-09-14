const express = require("express");
const Router = require("./src/routes/Router");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const { mongoURI } = require("./src/config/keys");
requireDir("./src/models"); // Models requiring

// MongoDB connection (
mongoose.connect(mongoURI, { useNewUrlParser: true });

const app = express();

app.use("/", Router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
