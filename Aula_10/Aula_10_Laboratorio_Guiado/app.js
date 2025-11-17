/* Exercício 1 — Função Dobro */
console.log('Exercício 1 — Função Dobro');
//Crie uma função chamada dobro que receba
//um número e devolva o dobro desse número.

function dobro(n) {
  return n * 2;
}

//Teste a função com diferentes números, por exemplo: 5, 10
console.log('N = 5');
console.log(dobro(5));
console.log('\nN = 10');
console.log(dobro(10));

/* Exercício 2 — Funções Matemáticas Básicas */
console.log('\nExercício 2 — Funções Matemáticas Básicas');

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

console.log('somar => 2 + 5 =', somar(2, 5));
console.log('subtrair => 12 - 3 =', subtrair(12, 3));
console.log('multiplicar => 4 * 6 =', multiplicar(4, 6));
console.log('dividir => 10 / 2 =', dividir(10, 2));

/* Exercício 3 — Calculadora com Função Composta */
console.log('\nExercício 3 — Calculadora com Função Composta');
//Crie uma função calcular(a, b, operacao) que receba dois números
//e uma função (uma das funções do exercício 2) e devolva o resultado.
function calcular(a, b, operacao) {
  return operacao(a, b);
}

console.log('somar => 3 + 4 =', calcular(3, 4, somar));
console.log('subtrair => 6 - 2 =', calcular(6, 2, subtrair));
console.log('multiplicar => 4 * 6 =', calcular(4, 6, multiplicar));
console.log('dividir => 10 / 2 =', calcular(10, 2, dividir));

/* Exercício 4 — Função com Ciclo */
console.log('\nExercício 4 — Função com Ciclo');
//Crie uma função contarAte(n) que use um ciclo for para mostrar todos os números de 1 até n.
function contarAte(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

// Teste com n = 5, n = 10
console.log('N = 5');
contarAte(5);
console.log('\nN = 10');
contarAte(10);

/* Exercício 5 — Função dentro de Função (Callback) */
console.log('\nExercício 5 — Função dentro de Função (Callback)');
//Crie uma função processarNumero(numero, funcao) que receba um
//número e uma função. A função passada deve ser chamada dentro de
//processarNumero com o número como argumento.
function processarNumero(numero, funcao) {
  return funcao(numero);
}

let incrementar = n => (n += 1);

console.log(processarNumero(2, dobro));
console.log(processarNumero(2, incrementar));
