const fs = require('fs');
const path = require('path');
const clientesModel = require('../models/clientesModel');

module.exports = {
    clientes: (req, res) => {
        res.sendFile('clientes.html', { root: './views' });
    },

    login: (req, res) => {
        res.sendFile('login.html', { root: './views' });
    },

    logado: (req, res) => {
        const { nome, email } = req.body;
        const mensagem = clientesModel.gerarMensagem(nome, email);

        const filePath = path.join(__dirname, '..', 'views', 'clientes.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) return res.status(500).send('Erro ao ler a página de clientes.');
            const marcador = '<!-- MENSAGEM -->';
            const substituto = `<p>${mensagem}</p>`;
            const resultado = data.includes(marcador) ? data.replace(marcador, substituto) : data;
            res.send(resultado);
        });
    },
};