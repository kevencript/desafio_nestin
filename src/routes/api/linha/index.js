/**
 * routes/Auth/GoogleStrategy/index.js
 *
 * @description: This file contains all the requisitions for User handling
 *
 */

const express = require("express");
const router = express.Router();

// controller import
const controller = require("./controller");

// @route    PUT /api/linha/create
// @desc     vincular uma nova linha em um perfil
// @acess    Private
router.put("/create", controller.create);

// @route    DELETE /api/linha/delete/:id
// @desc     excluir uma linha atribuida ao usuário
// @acess    Private
router.delete("/delete/:id", controller.delete);

module.exports = router;
