const PerfilSchema = require("../model/perfil");
const express = require("express");
const router = express.Router();

// Lista todos os produtos
router.get("/", async(req, res) => {
    try {
        const perfil = await PerfilSchema.find();
        res.json(perfil);
    } catch (e) {
        res.send({ error: "Erro ao obter o perfil" });
    }
})


module.exports = router