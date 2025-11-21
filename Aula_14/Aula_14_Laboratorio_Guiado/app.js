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
