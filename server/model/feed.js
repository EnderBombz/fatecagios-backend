const mongoose = require("mongoose");

const EstagiosSchema = mongoose.Schema({
    img: { type: String },
    email: { type: String },
    nome: { type: String },
}, { timestamp: true })

module.exports = mongoose.model("estagios", EstagiosSchema);