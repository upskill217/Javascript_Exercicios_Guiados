/* Precedência Matemática: */

console.log("--- Parte 1: Precedência e Módulo --- \n")
console.log("\nPrecedência Matemática:")
let result1 = 5 + 2 * 3;
let result2 = (5 + 2) * 3;

console.log("Resutado 1:", result1);
console.log("Resultado 2:", result2);

/* Operador Módulo (%): */
console.log("\nOperador Módulo (%):")
let dezRestoDois = 10 % 2;
let onzeRestoDois = 11 % 2;

console.log("10 % 2 é :", dezRestoDois);
console.log("11 % 2 é :", onzeRestoDois)

/* Operador incremento (++) e decremento(--) */
console.log("\nOperador incremento (++) e decremento(--)");
let numero = 5;
console.log("Valor inicial: ", numero)

numero++;
console.log("Depois do numero++:", numero)

numero--;
console.log("Depois do numero--:", numero)

let a = 3;
let b = ++a;
console.log("Pré-imcremento (++a):a=", a, "b=", b)

a = 3;
b = a++;
console.log("Pós-incremento (a++):a=", a, "b=", b)

console.log("--- Parte 2: O Perigo da Igualdade --- \n")
console.log("\n1 - Concatenação vs. Atribuição Composta")

let contador = 5;
contador += 10;
console.log("Contador após +=10:", contador)

let frase = "Olá";
frase += " Mundo!";
console.log("Frase concatenada: ", frase)

console.log("\n2 - A Regra do === (Strict Equality)")

const num = 10;
const stringNum = "10";
console.log("10 == '10' (Loose):", num == stringNum)
console.log("10 === '10' (Strict):", num === stringNum)
console.log("'false' == false:", "false" == false);
console.log("'false' === false:", "false" === false);

console.log("\n3 - 3. Lógicos em Ação:")

console.log("\nSimular uma condição de acesso")
const usuarioLogado = true;
const temPermissao = false;

// Deve aceder apenas se estiver logado E tiver permissão
const podeAceder = usuarioLogado && temPermissao;
console.log("Pode aceder (Logado E Permissão)?", podeAceder);

// Deve ser notificado se logado OU se não tiver permissão
const requerAtencao = usuarioLogado || !temPermissao;
console.log("Requer atenção (Logado OU SEM Permissão)?", requerAtencao);

console.log("\nMini desafio 1")

let nome = "utilizador";
let senhaCorreta = "1234";
let senhaInserida = "1234";

let loginValido = (nome === "utilizador") && (senhaCorreta === senhaInserida);
console.log("Login válido?", loginValido)

console.log("\nMini desafio 2")

nome = "Rita";
let idade = 22;
let cidade = "Lisboa";

let mensagem1 = "A " + nome + " tem " + idade + " anos e vive em "+cidade+".";
console.log(mensagem1);

let mensagem2 = `A ${nome} tem ${idade} anos e vivem em ${cidade}.`;
console.log(mensagem2)