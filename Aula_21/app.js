//Bug #1
let i = 0;
while (i < 5) {
  console.log(i);
}

//Bug #2
function calcular() {
  let taxa = 0.2;
  if (true) {
    let total = 100 * taxa;
  }
  console.log(total);
}
calcular();

//Bug #3
let preco1 = "10";
let preco2 = "20";
let total = preco1 + preco2;
console.log("O total é: " + total);

//Bug #4
let nomes = ["Ana", "Rui", "Eva"];
// O length é 3. Os índices são 0, 1, 2.
for (let i = 0; i < nomes.length - 1; i++) {
  console.log(nomes[i]);
}

//Bug #5
let user = {
  nome: "João",
};

console.log(user.morada.cidade);
