const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  nome: String,
  sobrenome: String,
  cpf: String,
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
      horario: String
    }
  ]
});

mongoose.model("users", userSchema);
