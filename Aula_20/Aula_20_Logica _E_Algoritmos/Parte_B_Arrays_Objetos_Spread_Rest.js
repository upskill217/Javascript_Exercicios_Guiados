/* Arrays de Objetos e Spread/Rest */

//21 - Spread (Arrays): Tens arr1 = [1, 2] e arr2 = [3, 4].
//Cria um arr3 que junta os dois usando o operador spread ....

const array1 = [1, 2];
const array2 = [3, 4];

const array3 = [...array1, ...array2];
console.log(array3); // [1, 2, 3, 4]

//22 - Spread (Objetos): Tens user = {nome: "Ana"}.
// Cria um userUpdate que copia as propriedades de user e adiciona email: "ana@mail.com".

const user = { nome: "Ana" };

const userUpdate = { ...user, email: "ana@mail.com" };
console.log("UserUpdate; ", userUpdate);

//23 - Rest (Funções): Cria uma função somarTudo(...numeros)
// que recebe uma quantidade indefinida de argumentos e retorna a soma de todos.
function somarTudo(...numeros) {
  let soma = 0;
  for (let n of numeros) {
    soma += n;
  }
  return soma;
}

console.log("Soma total: ", somarTudo(2, 3, 4, 5, 6));

//24 - Array de Objetos: Cria um array turma contendo 3 objetos,
// onde cada um representa um aluno (`nome`, `nota`).
const turma = [
  { nome: "Danilson", nota: 15 },
  { name: "Daniela", nota: 18 },
  { nome: "Bruno", nota: 8 },
];

console.log(turma);

//25 - Filtro em Array de Objetos: Percorre o array turma e
// cria um novo array apenas com os alunos que têm nota positiva.
