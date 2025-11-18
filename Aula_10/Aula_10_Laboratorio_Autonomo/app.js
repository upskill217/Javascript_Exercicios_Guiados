/* Exercício 1 — Saudar Usuário */
console.log('Exercício 1 — Saudar Usuário\n');
//Crie uma função saudar(nome) que exiba
//"Olá, [nome]!" no console.

function saudar(nome) {
  console.log('Olá, ' + nome + '!');
}

saudar('Danilson');
saudar('Clarice');
saudar('Miguel');
saudar('Taís');

/* Exercício 2 — Dobro de um Número */
console.log('\nExercício 2 — Dobro de um Número');

//Crie uma função dobro(n) que retorne o dobro de um número.
function dobro (n){
   return n * 2;
}

console.log('Dobro de 4 = ', dobro(4));
console.log('Dobro de 10 = ', dobro(10));

/* Exercício 3 — Média de Dois Números */
console.log('\nExercício 3 — Média de Dois Números');

//Crie uma função media(a, b) que calcule a média aritmética de dois números.
function media(a, b){
  return (a + b) / 2;
} 

console.log('Media 1 -', media(15, 17));
console.log('Media 2 -', media(10, 14));
console.log('Media 3 -', media(9.5, 11));

/* Exercício 4 — Maior de Dois Números */
console.log('\nExercício 4 — Maior de Dois Números');

//Crie uma função maior(a, b) que devolva o maior dos dois números
function maior(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
} 

console.log('Maior [1, 4] =', maior(1, 4));
console.log('Maior [3, 2] = ', maior(3, 2));
console.log('Maior [5, 7] = ', maior(5, 7));
console.log('Maior [0, 1] = ', maior(0, 1));

/* Exercício 8 — Conversão de Minutos para Segundos */
console.log("\nExercício 8 — Conversão de Minutos para Segundos");

//Crie uma função minutosParaSegundos(minutos) que converta minutos em segundos.
function minutosParaSegundos(minutos){
  return minutos * 60;
}

console.log('5 minutos vale:', minutosParaSegundos(5)+" segundos.");
console.log('10 minutos vale:', minutosParaSegundos(10)+" segundos.");
console.log('15 minutos vale:', minutosParaSegundos(15)+" segundos.");

/* Exercício 9 — Número ao Quadrado */
console.log("\nExercício 9 — Número ao Quadrado");

//Crie uma função aoQuadrado(n) que retorne o quadrado de um número.
function aoQuadrado(n){
  return n*n;
}

// Teste com n = 3, n = 7
console.log('Ao Quadrado de 3 = ', aoQuadrado(3));
console.log('Ao Quadrado de 7 = ', aoQuadrado(7));

/* Exercício 10 — Função Composta Simples */
console.log("\nExercício 10 — Função Composta Simples");

//Crie duas funções simples: incrementar(n) e decrementar(n). 
// Depois crie uma função aplicarFuncao(n, func) que receba um número e uma função, e retorne o resultado.
function incrementar (n){
  return n += 1;
}

function decrementar(n){
  return n -= 1;
}

function aplicarFuncao(n, fun){
  return fun(n);
}

// Teste: aplicarFuncao(5, incrementar) -> 6
console.log(aplicarFuncao(5, incrementar));

// Teste: aplicarFuncao(5, decrementar) -> 4
console.log(aplicarFuncao(5, decrementar));
