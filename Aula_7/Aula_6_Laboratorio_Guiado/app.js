/* Parte 1: Sintaxe Básica do for */
console.log("\nParte 1: Sintaxe Básica do for");

//1. Ciclo Simples
console.log("--- Contagem Simples ---");

//Demonstrar cada componente do for (i=0, i<5, i++):
for (let i = 0; i < 5; i++) {
  // i vai de 0, 1, 2, 3, 4
  console.log("Iteração número:", i);
}

//2. Ciclo Regressivo
console.log("\n--- Contagem Regressiva ---");

//Mostrar como inverter o fluxo usando decremento e a condição oposta:
for (let j = 5; j >= 1; j--) {
  // j-- é o mesmo que j = j - 1
  console.log("Lançamento em:", j);
}
console.log("FOGO!");

//3. Ciclo com Incremento Diferente

console.log("\n--- Contar de 3 em 3 ---");

//Usar o operador de atribuição composta (+=) para alterar o passo:
for (let k = 0; k <= 15; k += 3) {
  console.log("Valor:", k);
}

/* Parte 2: Somatórios e Filtragem */
console.log("\nParte 2: Somatórios e Filtragem");

//1. Construir um Somatório (Acumulador);
//Demonstrar a necessidade de declarar a variável acumuladora fora do ciclo:

let totalCusto = 0;
const numItens = 4;
const custoItem = 15;

for (let i = 0; i < numItens; i++) {
  totalCusto += custoItem; // totalCusto = totalCusto + 15
  console.log(`Item ${i + 1} adicionado. Total provisório: ${totalCusto}`);
}
console.log("\nCusto Final:", totalCusto);

//  2. Filtrar Ímpares
//Usar o operador Módulo (%) e o if para filtrar números:
console.log("\n--- Números Ímpares de 1 a 10 ---");
for (let x = 1; x <= 10; x++) {
  if (x % 2 !== 0) {
    // Se o resto da divisão por 2 NÃO for zero (é ímpar)
    console.log(x);
  }
}

//3. Somatório condicionado
//Combinar acumulador e filtragem ao mesmo tempo, para somar apenas os números pares de 1 a 10:
let somaPares = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    somaPares += i;
  }
}
console.log("Soma dos pares de 1 a 10:", somaPares);
