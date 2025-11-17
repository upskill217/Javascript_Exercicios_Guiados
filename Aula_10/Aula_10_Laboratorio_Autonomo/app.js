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
const dobro = n => n * 2;

console.log('Dobro de 4 = ', dobro(4));
console.log('Dobro de 10 = ', dobro(10));

/* Exercício 3 — Média de Dois Números */
console.log('\nExercício 3 — Média de Dois Números');
//Crie uma função media(a, b) que calcule a média aritmética de dois números.
let media = (a, b) => (a + b) / 2;

console.log('Media 1 -', media(15, 17));
console.log('Media 2 -', media(10, 14));
console.log('Media 3 -', media(9.5, 11));

/* Exercício 4 — Maior de Dois Números */
console.log('\nExercício 4 — Maior de Dois Números');
//Crie uma função maior(a, b) que devolva o maior dos dois números
const maior = (a, b) => (a > b ? a : b);

console.log('Maior [1, 4] =', maior(1, 4));
console.log('Maior [3, 2] = ', maior(3, 2));
console.log('Maior [5, 7] = ', maior(5, 7));
console.log('Maior [0, 1] = ', maior(0, 1));
