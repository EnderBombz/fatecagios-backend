const EstagiosSchema = require("../model/feed");
const express = require("express");
const router = express.Router();

router.get("/", async(req, res) => {
    try {
        const feed = await EstagiosSchema.find();
        return res.send({ feed })

    } catch (e) {
        res.send({ error: "Erro ao obter os dados :" + e });
    }
})

module.exports = router