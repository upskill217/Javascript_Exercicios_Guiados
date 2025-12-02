/* Arrays e Funções */

//11 - Criar Array: Cria um array frutas com 3 frutas. Imprime a segunda fruta.
const frutas = ["maça", "pêra", "banana", "laranja"];
// Imprime a segunda fruta.
console.log(frutas[1]);

//12 - Adicionar/Remover: Adiciona "Kiwi" ao final do array anterior e
frutas.push("Kiwi");
//remove o primeiro elemento.
frutas.shift();
//Imprime o array final.
console.log(frutas);
console.table(frutas);

//13 - Loop em Array: Cria um array de notas [10, 15, 8, 12].
//Usa um loop para imprimir apenas as negativas (< 10).
const notas = [10, 15, 8, 12];

let notasNegativas = notas.filter((n) => n < 10);
console.log("Notas negativas: ", notasNegativas);

//Outra forma
notas.filter((n) => n < 10).forEach((n) => console.log(n));

//outra forma ainda
notas.forEach((n) => {
  if (n < 10) {
    console.log(n);
  }
});

//14 - Média: Cria uma função calcularMedia(lista) que recebe um array
// de números e retorna a média.
function calcularMedia(lista) {
  let soma = lista.reduce((acc, n) => acc + n, 0);
  let media = soma / lista.length;
  return media;
}

let mediaTotal = calcularMedia(notas);
console.log("Media Total: ", mediaTotal);

//15 - Pesquisa: Cria uma função temValor(lista, valor) que retorna true
// se o valor existir na lista, e false caso contrário (tenta fazer sem usar .includes() primeiro).
