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
        const { nome, email, senha } = req.body;
        const mensagem = clientesModel.gerarMensagemLogin(nome, email, senha);
        const acesso = clientesModel.verificarAcesso(email, senha);
        const filePath = path.join(__dirname, '..', 'views', 'clientes.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) return res.status(500).send('Erro ao ler a página de clientes.');
            const marcador = '<!-- MENSAGEM -->';
            const substituto = `<p>${mensagem}</p>`;
            let resultado = data.includes(marcador) ? data.replace(marcador, substituto) : data;

            // quando acesso for liberado, alteramos o texto do link presente no arquivo clientes.html
            if (acesso === 'liberado') {
                // substitui a âncora que leva ao /clientes/login para mostrar "alterar login"
                resultado = resultado.replace('<a href="/clientes/login"><p>Ir para login</p></a>',
                                              '<a href="/clientes/login"><p>alterar login</p></a>');
            }

            res.send(resultado);
        });
    },
};