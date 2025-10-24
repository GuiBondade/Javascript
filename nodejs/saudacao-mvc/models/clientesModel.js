module.exports = {
  gerarMensagem: (nome, email) => {
    const n = (nome || '').trim();
    if (n && email && email.trim()) {
      return `Olá ${n}, você está logado com o e-mail ${email.trim()}!`;
    }
    if (n) {
      return `Olá ${n}, você está logado!`;
    }
    return `Você está logado!`;
  }
};