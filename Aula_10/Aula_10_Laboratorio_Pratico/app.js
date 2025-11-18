/* Exercício 1 — Função com Condicional */
console.log('Exercício 1 — Função com Condicional');

//Crie uma função verificarParOuImpar(n) que mostre no 
//console se o número é par ou ímpar
function verificarParOuImpar(n) {
  if (n % 2 === 0) {
    console.log(`O numero ${n} é par.`);
  } else {
    console.log(`O numero ${n} é ímpar.`);
  }
}
//testar função
verificarParOuImpar(2);
verificarParOuImpar(35);
verificarParOuImpar(3);
verificarParOuImpar(20);

/* Exercício 2 — Cálculo do IMC */
console.log("\nExercício 2 — Cálculo do IMC ");
//Crie uma função calcularIMC(peso, altura) que devolva o IMC usando:

function calcularIMC(peso, altura) {
  // IMC = peso / (altura * altura)
  IMC = peso / (altura * altura);
  console.log(`O IMC de ${peso} kg e ${altura} m é ${IMC}`)
}
//testar função calcular IMC
calcularIMC(65, 1.70);
calcularIMC(120, 1.82);
calcularIMC(50, 1.50);

/* Exercício 3 — Somatório de 1 até n */
console.log('\nExercício 3 — Somatório de 1 até n');

//Crie uma função somatorio(n) que calcule a soma de todos
//os números de 1 até n usando um ciclo for
function somatorio(n) {
  let soma = 0;
  for (let i = 1; i <= n; i++) {
    soma += i;
  }
  return soma;
}

// Teste com n = 5 (resultado 15), n = 10 (resultado 55)
console.log(`Soma total de 5 = ${somatorio(5)}`);
console.log(`Soma total de 10 = ${somatorio(10)}`);
