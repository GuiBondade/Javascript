const produtosModel = require("../models/produtosModel");

module.exports = {
    produtos: (req, res) => {
        res.sendFile('produtos.html', { root: './views' });
    },

    camisetas: (req, res) => {
        res.sendFile('camisetas.html', { root: './views' });
    },

    formCadastrar: (req, res) => {
        res.sendFile('formCadastrar.html', { root: './views' });
    },

    cadastrar: (req, res) => {
        const { descrição, id, quantidade, preco } = req.body;
        res.send(produtosModel.gerarCadastro(descrição, id, quantidade, preco));
    }
};
