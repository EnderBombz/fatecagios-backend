const mongoose = require("mongoose");

const FeedSchema = mongoose.Schema({
    nome: {
        type: String,
    },
    avatar: {
        type: String,
    },
    titulo: {
        type: String,
    },
    conteudo: {
        type: String,
    },
    img: {
        type: String,
    },
}, {
    timestamps: { createdAt: 'criado_em', updatedAt: 'alterado_em' }
});

module.exports = mongoose.model("feed", FeedSchema);