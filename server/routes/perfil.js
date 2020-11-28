const Produto = require("../model/Produto");
const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const auth = require('../middleware/auth')

// Lista todos os produtos
router.get("/", auth, async(req, res) => {
    try {
        const produtos = await Produto.find().sort({ nome: 1 });
        res.json(produtos);
    } catch (e) {
        res.send({ error: "Erro ao obter os Produtos" });
    }
})

router.post("/", [
    check("nome", "Informe o nome do produto").not().isEmpty(),
    check("codigobarra", "Código de Barra deve ter no mínimo 13 caracteres").isLength({ min: 13 })
], async(req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    const { nome, descricao, preco, codigobarra } = req.body
    try {
        let aproduto = new Produto({ nome, descricao, preco, codigobarra })
        await aproduto.save()
        res.send(produto)
    } catch (err) {
        return res.status(500).json({
            errors: `Erro ao salvar o produto: ${err.message}`
        })
    }
})

module.exports = router