/* Parte B: Escrita de Código */

//Loops e Ifs

//6 - Contagem: Cria um loop for que imprime os números de 5 a 15.
function contagem(min, max) {
  for (let i = min; i <= max; i++) {
    console.log(i);
  }
}
// Chama a função para imprimir de 5 a 15
contagem(5, 15);

//7 - Soma de Pares: Cria um loop que soma todos os números pares entre 0 e 20 e imprime o total.
function somaPares(max) {
  let soma = 0;
  for (let i = 0; i < max; i++) {
    if (i % 2 === 0) {
      soma += i;
    }
  }
  return soma;
}
// Chama a função e imprime o resultado
let totalPares = somaPares(20);
console.log("\nSoma Total de Pares: ", totalPares);

//8 - Tabuada: Cria uma função tabuada(n) que imprime a tabuada desse número (ex: 2 x 1 = 2...).
function tabuada(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

function tabuada1(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
}
// Chama a função para imprimir a tabuada do 2
console.log("\n--- Tabuada ---");
tabuada(2);

console.log("\n--- Tabuada 1 ---");
tabuada1(3);

//9 - Condicional Simples: Cria uma variável nota. Se for < 10 imprime "Reprovado",
//se for >= 10 e < 14 imprime "Suficiente", senão "Bom".
function avaliarNota(nota) {
  if (nota < 10) {
    console.log("Reprovado");
  } else if (nota >= 10 && nota < 14) {
    console.log("Suficiente");
  } else {
    console.log("Bom");
  }
}

// Chama a função para avaliar uma nota
console.log("\n--- Avaliação de Nota ---");
//avaliarNota(12);
//avaliarNota(9);
//avaliarNota(17);

//10 - FizzBuzz Lite: Percorre números de 1 a 10. Se o número for 3 ou 6, imprime "Fizz",
// senão imprime o número.
