/* Desafio 1: Tabela de Multiplicação do 7 */
console.log("\nDesafio 1: Tabela de Multiplicação do 7");
const tabuada = 7;

for (let i = 1; i <= 10; i++) {
  console.log(tabuada + " x " + i + " = ", tabuada * i);
}

/* Desafio 2: Média de Idades */
console.log("\nDesafio 2: Média de Idades");

//Queremos calcular a soma de idades de 5 pessoas.
let somaIdade = 0;
const numPessoas = 5;

for (let j = 1; j <= numPessoas; j++) {
  const idade = 20;
  somaIdade += idade;
}
console.log(`Soma total de idades: ${somaIdade}`);

//calcular a média final
let mediaFinal = somaIdade / numPessoas;

console.log(`Média Final: ${mediaFinal}`);

/* Desafio 3: Contagem de Números Primos (Filtragem Avançada) */
console.log("\nDesafio 3: Contagem de Números Primos (Filtragem Avançada)");

//Tarefa: Use um ciclo for de 1 a 20. Dentro do ciclo,
// use a lógica de módulo para identificar e imprimir apenas os números que são divisíveis por 3.
for (let x = 1; x <= 20; x++) {
  //Use o if e x % 3 === 0.
  if (x % 3 === 0) {
    console.log(`Divisível por 3: ${x}`);
  }
}

/* Desafio 4: Soma de Números Pares */
console.log("\nDesafio 4: Soma de Números Pares");

//Tarefa: Calcular a soma de todos os números pares entre 1 e 20.
let somaTotal = 0;

for (let k = 1; k <= 20; k++) {
  if (k % 2 === 0) {
    somaTotal += k;
  }
}
console.log(`Soma total dos numeros pares (1-20): ${somaTotal}`);

/* Desafio 5: Contagem Regressiva com Condicional */
console.log("\nDesafio 5: Contagem Regressiva com Condicional");

//Tarefa: Contar de 10 a 1 e imprimir uma mensagem especial para números múltiplos de 3.
console.log("--- Contagem regressiva para múltiplos de 3 entre (10-1)---");
for (let m = 10; m >= 1; m -= 3) {
  console.log(`m: ${m}`);
}
