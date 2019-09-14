/**
 * src/routes/api/linha/controller.js
 *
 * @description: This file contain all the logic and interaction for linha stuff
 *
 */

const mongoose = require("mongoose");
const User = mongoose.model("users");
const Parada = mongoose.model("paradas");

// @route    PUT /api/linha/create
// @desc     vincular uma nova linha em um perfil
exports.create = async (req, res) => {
  try {
    const profile = await User.findOne({ _id: "5d7ce0582126cb4cb1ff560e" });

    // Desestruturando os dados enviados via requisição
    const { nmr_linha, parada, horario_inicio, horario_fim } = req.body;

    // Atribuindo os valores para a variável "novaLinha"
    const novaLinha = { nmr_linha, parada, horario_inicio, horario_fim };

    // Realizando a alteração no perfil do usuário e adicionando a
    profile.linhas.unshift(novaLinha);

    await profile.save();

    res.send(profile);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
};

// @route    DELETE /api/linha/delete/:id
// @desc     excluir uma linha atribuida ao usuário
exports.delete = async (req, res) => {
  try {
    const profile = await User.findOne({ _id: "5d7ce0582126cb4cb1ff560e" });

    const removeIndex = profile.linhas
      .map(item => item.id)
      .indexOf(req.params.id);

    profile.linhas.splice(removeIndex, 1);

    await profile.save();

    res.send(profile);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
};

exports.create_parada = async (req, res) => {
  const parada = await new Parada({});

  await parada.save();

  res.send(parada);
};
