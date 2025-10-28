module.exports = {
    gerarCadastro: (descrição, id, quantidade, preco) => {
        return `Produto cadastrado: ${descrição} - ID: ${id} - Quantidade: ${quantidade} - R$ ${preco}`;
    }
};
