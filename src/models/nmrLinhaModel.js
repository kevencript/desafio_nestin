const mongoose = require("mongoose");
const { Schema } = mongoose;

const nmrLinhaSchema = new Schema({
  nmr_linha: String
});

mongoose.model("nmrLinhas", nmrLinhaSchema);
