const mongoose = require("mongoose");

const PerfilSchema = mongoose.Schema({
    img: {
        type: String,
    },
    author: {
        type: String,
    },
    descricao: {
        type: String,
    },
    email: {
        type: String,
    },
    Instituicao: {
        type: String,
    },
    icon: {
        type: String,
    },
}, {
    timestamps: { createdAt: 'criado_em', updatedAt: 'alterado_em' }
});

module.exports = mongoose.model("perfil", PerfilSchema);