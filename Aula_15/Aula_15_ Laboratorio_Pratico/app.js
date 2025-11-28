/* Exercício 1 — Lista de nomes de adultos com email válido (map + filter) */
console.log(
  "\nExercício 1 — Lista de nomes de adultos com email válido (map + filter)"
);

//Dado o array de usuários,
const usuarios = [
  { nome: "Ana", email: "ana@email.com", idade: 20 },
  { nome: "João", email: null, idade: 25 },
  { nome: "Maria", email: "maria@email.com", idade: 30 },
  { nome: "Pedro", email: "pedro@email.com", idade: 17 },
];

//crie um array apenas com os nomes das pessoas maiores de 18 anos
//e que tenham email definido.
const nomePessoaMaior18 = usuarios
  .filter((u) => u.idade > 18 && u.email)
  .map((u) => u.nome);
console.log(nomePessoaMaior18);

/* Exercício 2 — Média de idade dos usuários com email (filter + reduce) */
console.log(
  "\nExercício 2 — Média de idade dos usuários com email (filter + reduce)"
);

//Calcule a média de idade apenas dos usuários que têm email definido (não nulo ou vazio).
const mediaIdade1 = usuarios
  .filter((u) => u.email)
  .reduce((acc, u, _, arr) => acc + u.idade / arr.length, 0);

console.log(mediaIdade1.toFixed(2));

//outro meio
const usuariosComEmail = usuarios.filter((u) => u.email);

const somaTotalIdade = usuariosComEmail.reduce((acc, u) => acc + u.idade, 0);

const mediaIdade2 = somaTotalIdade/usuariosComEmail.length;

console.log("Outra forma: ",mediaIdade2.toFixed(2));

/* Exercício 3 — Array de mensagens personalizadas (map + filter) */
console.log("\nExercício 3 — Array de mensagens personalizadas (map + filter)");

//Crie um array de strings com mensagens do tipo:
//"Olá, Ana! Você tem 20 anos."
//Apenas para os usuários com idade maior ou igual a 18 e que possuem email.
const mensagens = usuarios
  .filter((u) => u.idade > 18 && u.email)
  .map((u) => `Olá, ${u.nome}! Você tem ${u.idade} anos.`);

console.log(mensagens);
