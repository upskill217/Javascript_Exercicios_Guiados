/*  Exercício 1 — Criar um Array */
console.log(" Exercício 1 — Criar um Array");

//Cria um array chamado frutas contendo os valores: "maçã", "banana", "laranja".
const frutas = ["maça", "banana", "laranja"];
// imprime o array no console.
console.log(frutas);

/* Exercício 2 — Acessar elementos e índice */
console.log("\nExercício 2 — Acessar elementos e índice");
//O primeiro elemento
console.log(`O primeiro elemento: ${frutas[0]}`);
console.log(`Outra forma - primeiro elemento: ${frutas.at(0)}`);
//O último elemento
console.log(`O último elemento: ${frutas[frutas.length - 1]}`);
console.log(`Outra forma - último elemento: ${frutas.at(-1)}`);
//Todos os elementos com seus índices
console.log("Todos os elementos com seus índices:");
for (let i in frutas) {
  console.log(`${i} - ${frutas[i]}`);
}

/* Exercício 3 — Adicionar e remover elementos */
console.log("\nExercício 3 — Adicionar e remover elementos");

//adicionar "uva" no final
frutas.push("uva");
//adicionar "kiwi" no início
frutas.unshift("kiwi");
//mostar array
console.log(frutas);

//remove o último elemento
const removerUltimo = frutas.pop();
console.log(`o último elemento removido: ${removerUltimo}`);
// remove o primeiro elemento
const removerPrimeiro = frutas.shift();
console.log(`o primeiro elemento removido: ${removerPrimeiro}`);
// Imprime o array final
console.log(frutas);
for (let fruta of frutas) {
  console.log(`${fruta}`);
}

/* Exercício 4 — Verificar existência e posição */
console.log("\nExercício 4 — Verificar existência e posição");
//verificar se "banana" está no array
console.log(frutas.includes("banana"));
//descobrir a posição de "laranja".
console.log(frutas.indexOf("laranja"));

/* Exercício 5 — Iterar com forEach */
console.log("\nExercício 5 — Iterar com forEach");
frutas.forEach((valor) => {
  console.log(`Fruta: ${valor}`);
});

/* Exercício 6 — Transformar com map */
console.log("\nExercício 6 — Transformar com map");

const numeros = [1, 2, 3, 4, 5];
console.log("Original: ", numeros);

//novo array quadrados com os quadrados de cada número
let novoArray = numeros.map((n) => n * 2);
console.log("Quadrados: ", novoArray);

/* Exercício 7 — Filtrar valores com filter */
console.log("\nExercício 7 — Filtrar valores com filter");

//novo array contendo apenas os números maiores que 3 usando
let maiorQue3 = numeros.filter((n) => n > 3);
console.log("Numero Maior que 3: ", maiorQue3);

/* Exercício 8 — Reduzir valores com reduce */
console.log("\nExercício 8 — Reduzir valores com reduce");

//para calcular a soma de todos os elementos usando
let total = numeros.reduce((acc, n) => acc + n, 0);
console.log("Soma total: ", total);

/* Exercício 9 — Função que processa arrays */
console.log("\nExercício 9 — Função que processa arrays");

//Cria uma função processarArray(array, funcao) que recebe um array
//e uma função callback. A função callback deve ser aplicada a cada
//elemento do array e imprimir o resultado.
function processarArray(array, funcao) {
  for (let n of array) {
    const result = funcao(n);
    console.log(result);
  }
}

//passar uma função que dobre cada elemento.
function dobrar(n) {
  return n * 2;
}

processarArray(numeros, dobrar);

/* Exercício 10 — Lista de compras com estatísticas */
console.log("\nExercício 10 — Lista de compras com estatísticas");

//Cria um array de objetos compras, cada objeto com produto, preco e quantidade:
const compras = [
  { produto: "Arroz", preco: 2.5, quantidade: 2 },
  { produto: "Leite", preco: 1.8, quantidade: 3 },
  { produto: "Pão", preco: 0.25, quantidade: 10 },
];

//Imprimir todos os produtos
console.log("\n--- Imprimir todos os produtos ---");
compras.forEach((compra) => {
  console.log(
    `produto: ${compra.produto}, preço: ${compra.preco}, quantidade: ${compra.quantidade}`
  );
});

//Calcular o total gasto usando reduce
console.log("\n--- Calcular o total gasto usando reduce ---");
let totalGasto2 = compras.reduce((acc, c) => acc + c.preco * c.quantidade, 0);
console.log(`Gasto Total: ${totalGasto2}`);

//Filtrar produtos que custam mais de 2€
console.log("\n--- Filtrar produtos que custam mais de 2€ ---");
let produtoMais2Euros = compras.filter((c) => c.preco > 2);
console.log(produtoMais2Euros);

//Criar uma lista apenas com os nomes dos produtos usando map
console.log(
  "\n--- Criar uma lista apenas com os nomes dos produtos usando map ---"
);
let nomes = compras.map((c) => c.produto);
console.log(nomes);
