/* Desafio 1: Somatório Condicional (while) */
console.log("\nDesafio 1: Somatório Condicional (while)");

let saldo = 0;
const limite = 50;
const valorDeposito = 10;

while (saldo < limite) {
  saldo += valorDeposito;
  console.log(`Saldo atual: ${saldo}`);
}

/* Desafio 2: Contagem Regressiva com while */
console.log("\nDesafio 2: Contagem Regressiva com while");

//Tarefa:Contar de 10 a 1 usando while e imprimir uma mensagem
//especial quando o número for múltiplo de 3
let i = 10;
while (i >= 1) {
  if (i % 3 === 0) {
    console.log(`O número ${i} é múltiplo de 3.`);
  }
  i--;
}

/* Desafio 3: Soma de Números Positivos Inseridos pelo Utilizador (Simulado) */
console.log("\nDesafio 3: Soma de Números Positivos Inseridos pelo Utilizador (Simulado)");

let somarPositivos = 0;
let numeroInserido = 0;

while (numeroInserido % 2 === 0) {
  somarPositivos += numeroInserido;
  numeroInserido = Number(prompt("Insira um número a sua escolha?"));
}
console.log(`Soma total de numeros positivos: ${somarPositivos}`);

/* Desafio 4: Geração de Tabuada Completa (Aninhado) */
console.log('\nDesafio 4: Geração de Tabuada Completa (Aninhado)');
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log('\n');
}

/* Desafio 5: Padrão de Estrelas (Visualização de Aninhamento) */
console.log("\nDesafio 5: Padrão de Estrelas (Visualização de Aninhamento)");

for (let i = 1; i <= 5; i++) {
  let linha = "";
  for (let j = 1; j <= i; j++) {
    linha += "*";
  }
  console.log(`${linha}`);
}