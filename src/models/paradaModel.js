const mongoose = require("mongoose");
const { Schema } = mongoose;

const paradaSchema = new Schema({
  latitude: String,
  longitude: String,
  descricao: String
});

mongoose.model("paradas", paradaSchema);
