module.exports = {
  gerarMensagemLogin: (nome, email, senha) => {
    const n = (nome || '').trim();
    const acesso = (email === 'guilherme@gmail.com' && senha === '1234') ? 'liberado' : 'negado';

    if (acesso === 'liberado' && n && email && email.trim()) {
      return `Olá ${n}, você está logado com o e-mail ${email.trim()}! Acesso: ${acesso}`;
    }
    return `Acesso: ${acesso}`;
  },

  // função adicional para verificar o status de acesso sem montar a mensagem HTML
  verificarAcesso: (email, senha) => {
    return (email === 'guilherme@gmail.com' && senha === '1234') ? 'liberado' : 'negado';
  }
};