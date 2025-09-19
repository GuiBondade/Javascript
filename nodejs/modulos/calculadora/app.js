//const funcoesMatematicas = require('./funcoes_matematicas.js');
import { somar, subtrair, multiplicar, dividir, calcularIdade } from './funcoes_matematicas.js';

// Exemplo de uso:
console.log(somar(2, 3));
console.log(subtrair(5, 2));
console.log(multiplicar(4, 6));
console.log(dividir(10, 2));

const idade = calcularIdade(1963)
console.log(`Sua idade é ${idade} anos.`);