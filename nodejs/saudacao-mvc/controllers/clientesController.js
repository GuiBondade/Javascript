module.exports = {
    clientes: (req, res) => {
        res.sendFile('clientes.html', { root: './views' });
    },

    login: (req, res) => {
        res.sendFile('login.html', { root: './views' });
    },

    logado: (req, res) => {
        const { nome, email, senha } = req.body;
        res.send(`<h1>Você está na página de clientes</h1> <p>Olá ${nome}, você está logado!</p>`);
    },
};