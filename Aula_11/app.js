/* Exercício 1 — Ciclos Aninhados (Nested for) */
console.log("Exercício 1 — Ciclos Aninhados (Nested for)");
for (let i = 1; i <= 5; i++) {
  let linha = "";
  for (let j = 1; j <= i; j++) {
    linha += "*";
  }
  console.log(`${linha}`);
}

/* Exercício 2 — Tabuada com Ciclo */
console.log("\nExercício 2 — Tabuada com Ciclo");

for (let i = 1; i <= 12; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log("\n");
}

/* Exercício 3 — Função Tabuada */
console.log("\nExercício 3 — Função Tabuada");

function tabuada(numero, limite) {
  for (let i = 1; i <= numero; i++) {
    for (let j = 1; j <= limite; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
      console.log("\n");
  }
}

//testar tabuada com limite
tabuada(5,4);

/* Exercício 4 — Tabela de Multiplicação Completa (Nested for) */
console.log("\nExercício 4 — Tabela de Multiplicação Completa (Nested for)");

//let limite = Number(prompt("escolher até onde vai a tabuada"));
let limite = 4;
tabuada(5, limite);

/* Exercício 5 — Função com Ciclo e Callback */
console.log("\nExercício 5 — Função com Ciclo e Callback");
