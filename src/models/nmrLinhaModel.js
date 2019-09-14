const mongoose = require("mongoose");
const { Schema } = mongoose;

const nmrLinhaSchema = new Schema({
  nmr_linha: String,
  desc: String
});

mongoose.model("nmr_linhas", nmrLinhaSchema);
