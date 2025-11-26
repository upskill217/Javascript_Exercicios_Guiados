/* Exercício 1 — Extrair só os nomes (map) */
console.log("\nExercício 1 — Extrair só os nomes (map)");

const pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 30 },
];

//usar map para transformar cada objeto no seu nome
let nomes = pessoas.map((p) => p.nome);
console.log(nomes);

/* Exercício 2 — Adicionar nova propriedade (map) */
console.log("\nExercício 2 — Adicionar nova propriedade (map)");

//map para criar um novo array onde cada objeto tem a propriedade adulto (true se idade >= 18).
//Use spread para não mutar o objeto original: p => ({ ...p, adulto: p.idade >= 18 }).
let novoArray = pessoas.map((p) => ({ ...p, adulto: p.idade >= 18 }));
console.log(novoArray);

/* Exercício 3 — Filtrar maiores de idade (filter) */
console.log("\nExercício 3 — Filtrar maiores de idade (filter)");

//usar filter para devolver só pessoas com idade >= 25 (ou conforme pedido).
let idadeMaiorQue25 = pessoas.filter((p) => p.idade >= 25);
console.log(idadeMaiorQue25);

/* Exercício 4 — Procurar por nome específico (filter) */
console.log("\nExercício 4 — Procurar por nome específico (filter)");

// criar função procurar(arr, nome) que utiliza filter para
// devolver todos os objetos com esse nome.
function procurar(arr, nome) {
  return arr.filter((p) => p.nome.toLowerCase() === nome.toLowerCase());
}
let nomePessoa = procurar(pessoas, "João");
console.log(nomePessoa);

/* Exercício 5 — Converter em frases (map) */
console.log("\nExercício 5 — Converter em frases (map)");

//usar map para criar strings formatadas por pessoa.
//Use template strings: p => `${p.nome} tem ${p.idade} anos.`.
let result = pessoas.map((p) => `${p.nome} tem ${p.idade} anos.`);
console.log(result);

/*  Exercício 6 — Média de idades (reduce) */
console.log("\n Exercício 6 — Média de idades (reduce)");

// usar reduce para somar idades e depois dividir por pessoas.length
const somaIdade = pessoas.reduce((acc, p) => acc + p.idade, 0);
let mediaIdade = 0;
//Se array puder ser vazio, proteja dividindo apenas se length > 0.
if (pessoas.length > 0) {
  mediaIdade = somaIdade / pessoas.length;
}
//Formatar (opcional) com toFixed(2).
console.log(mediaIdade.toFixed(2));

/* Exercício 7 — Soma total das idades (reduce) */
console.log("\nExercício 7 — Soma total das idades (reduce)");

//: usar reduce para obter soma simples das idades.
let somaTotalIdade = pessoas.reduce((acc, p) => acc + p.idade, 0);
console.log(somaTotalIdade);

/* Exercício 8 — Contar adultos (filter + length) */
console.log("\nExercício 8 — Contar adultos (filter + length)");

// filtrar pessoas com idade >= 18 e usar .length para contar.
const adultos = pessoas.filter((p) => p.idade >= 18).length;
console.log(adultos);

/*  Exercício 9 — Listar nomes de pessoas com idade ímpar */
console.log("\nExercício 9 — Listar nomes de pessoas com idade ímpar");

//Crie um array com os nomes de todas as pessoas cuja idade seja ímpar.
let nomeIdadeImpar = pessoas
  //Use filter para selecionar apenas idades ímpares: p.idade % 2 !== 0
  .filter((p) => p.idade % 2 !== 0)
  //Use map para extrair os nomes.
  .map((p) => p.nome);

console.log(nomeIdadeImpar);

/* Exercício 10 — Verificar se todos são adultos */
console.log("\nExercício 10 — Verificar se todos são adultos");

//Use o método every para verificar a condição.
console.log(pessoas.every((p) => p.idade >= 18));
