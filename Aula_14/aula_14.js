/* PERCORRER ARRAY */
console.log("percorrer array com for...");

const numeros = [10, 20, 30];

for (let i = 0; i < numeros.length; i++) {
  console.log(i, numeros[i]);
}

console.log("\npercorrer array com for ... of");

for (let valor of numeros) {
  console.log(valor);
}

console.log("\npercorrer array com for ... in");

for (let idx in numeros) {
  console.log(idx, numeros[idx]);
}

console.log("\npercorrer array com forEach");

numeros.forEach((valor, idx) => {
  console.log(idx, valor);
});

const frutas = ["maça", "banana", "uva"];

frutas.forEach((fruta, i) => {
  console.log(`${i + 1} - ${fruta}`);
});

console.log("\npush() — Adiciona um elemento no final do array");
frutas.push("laranja");
console.log(frutas);

console.log("\npop() - Remove o ÚLTIMO elemento do array");
let removida = frutas.pop();
console.log(removida);
console.log(frutas);

console.log("\nshift() - Remove o PRIMEIRO elemento do array");
removida = frutas.shift();
console.log(removida);
console.log(frutas);

console.log("\nunshift() - Adiciona elemento no INÍCIO do array");
frutas.unshift("cereja");
console.log(frutas);

console.log("\nincludes() - Verifica se um elemento existe no array");
console.log(frutas.includes("laranja"));
console.log(frutas.includes("cereja"));

console.log("\nindexOf() - Retorna o índice do elemento, ou -1 se não existir");
console.log(frutas.indexOf("laranja"));
console.log(frutas.indexOf("banana"));
