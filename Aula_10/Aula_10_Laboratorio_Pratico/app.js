/* Exercício 1 — Função com Condicional */
console.log('Exercício 1 — Função com Condicional');
//Crie uma função verificarParOuImpar(n) que mostre no console se o número é par ou ím

function verificarParOuImpar(n) {
  if (n % 2 === 0) {
    console.log(`O numero ${n} é par.`);
  } else {
    console.log(`O numero ${n} é ímpar.`);
  }
}

verificarParOuImpar(2);
verificarParOuImpar(10);
verificarParOuImpar(3);
verificarParOuImpar(25);

/* Exercício 2 — Cálculo do IMC */
//Crie uma função calcularIMC(peso, altura) que devolva o IMC usando:
// IMC = peso / (altura * altura)
function calcularIMC(peso, altura) {
  let IMC = peso / (altura * altura);
  return IMC;
}

/* Exercício 3 — Somatório de 1 até n */
console.log('\nExercício 3 — Somatório de 1 até n');
//Crie uma função somatorio(n) que calcule a soma de todos
//os números de 1 até n usando um ciclo for
let soma = 0;
function somatorio(n) {
  for (let i = 1; i <= n; i++) {
    soma += i;
    return soma;
  }
}
