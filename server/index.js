// cSpell:Ignore usuario, versao
require('dotenv').config()
const express = require("express")
const bodyParser = require("body-parser")
const InicializaMongoServer = require("./config/db")
const feed = require("./routes/feed")
const path = require("path")
const EstagiosSchema = require("./model/feed");

const db = require('./db')
const collection = "Estagios";


// Inicializamos o servidor MongoDb
InicializaMongoServer();

const app = express();

// Porta Default
const PORT = process.env.PORT || 4000;

// parse application/json
app.use(bodyParser.json())


app.get("/", (req, res) => {
    res.json({ mensagem: "👏 API 100% funcional!", versao: "1.1.01" });
});

app.use("/get-estagios", feed);


app.listen(PORT, (req, res) => {
    console.log(`🖥️ Servidor iniciado na porta ${PORT}`);
});