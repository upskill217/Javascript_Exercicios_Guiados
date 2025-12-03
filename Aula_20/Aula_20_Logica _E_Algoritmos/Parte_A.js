/* M1 Aula 20 - Lógica e Algoritmos */

console.log("--- Parte A: Leitura de Código ---");

//1. Loops e Acumuladores
console.log("\n1. Loops e Acumuladores");
let total = 0;
for (let i = 1; i <= 4; i++) {
    if (i % 2 === 0) {
        total = total + i;
    }
}
console.log(total);

//2. Arrays e Condições
console.log("\n2. Arrays e Condições");
let lista = [10, 5, 20];
let maior = 0;
for (let n of lista) {
    if (n > maior) {
        maior = n;
    }
}
console.log(maior);

//3. Funções e Scope
console.log("\n3. Funções e Scope");
let x = 10;
function alterar(val) {
    let x = 20; // Atenção ao 'let' aqui dentro
    return val + x;
}
console.log(alterar(5));
console.log(x);

//4. Manipulação de Array
console.log("\n4. Manipulação de Array");
let cores = ["Azul", "Verde"];
cores.push("Amarelo");
let removida = cores.shift();
console.log(removida);
console.log(cores.length);

//5. Loops com Break
console.log("\n5. Loops com Break");
let n = 0;
while (n < 10) {
    n++;
    if (n === 3) continue;
    if (n === 5) break;
    console.log(n);
}