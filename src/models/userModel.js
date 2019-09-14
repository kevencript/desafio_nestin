const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  nome: String,
  sobrenome: String,
  email: String,
  linhas: [
    {
      nmr_linha: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "nmrLinhas"
      },
      parada: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "paradas"
      },
      horario_inicio: String,
      horario_fim: String
    }
  ],
  picture: String
});

mongoose.model("users", userSchema);
