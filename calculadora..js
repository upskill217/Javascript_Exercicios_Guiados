/* Desafio 1: A Calculadora de Preços */
console.log("\nDesafio 1: A Calculadora de Preços")

const precoUnitario = 45.99;
const quantidade = 3;
const taxaIVA = 0.23; //23%

let precoSemIva = precoUnitario * quantidade;
let valorIVA = precoSemIva * taxaIVA;

let precoTotal = precoSemIva;
precoTotal += valorIVA;

console.log("Sem IVA: " + precoSemIva)
console.log("Valor IVA: " + valorIVA)
console.log("Total com IVA: " + precoTotal)

/* Desafio 2: Lógica de Login */
console.log("\nDesafio 2: Lógica de Login")

const userAtivo = true;
const senhaCorreta = true;
const assinaturaPaga = false;

// 1. Acesso Simples: deve ser ativo E ter senha correta
const acessoSimples = userAtivo && senhaCorreta;
console.log("Acesso Simples:", acessoSimples);

// 2. Acesso Premium: precisa de acesso simples E assinatura paga
const acessoPremium = acessoSimples && assinaturaPaga;
console.log("Acesso Premium:", acessoPremium);

// 3. Requer Atualização: ativo E assinatura NÃO paga
const requerAtualizacao = userAtivo && !assinaturaPaga;
console.log("Requer Atualização:", requerAtualizacao);

/* Desafio 3: Média de Notas */
console.log("\nDesafio 3: Média de Notas")

const nota1 = 12;
const nota2 = 10;
const nota3 = 9;
const nota4 = 7;

let calcularMedia = (nota1 + nota2 + nota3 + nota4) / 4;
let alunoAprovou = calcularMedia >= 9.5;
console.log("A media do aluno é: " + calcularMedia)
console.log("Aluno foi aprovado?", alunoAprovou)

/* Desafio 4: Concatenação e Literais */
console.log("\nDesafio 4: Concatenação e Literais")

const nome = "Daniel";
const idade = 36;
const cidade = "Setúbal";

console.log("O " + nome + " tem " + idade + " anos e vive em " + cidade + ".")
console.log(`O ${nome} tem ${idade} anos e vive em ${cidade}.`)

/* Desafio 5: Conversor de Moeda */
console.log("\nDesafio 5: Conversor de Moeda")

const taxaCambio = 0.06;//6%
let valorAConverter = "100";
let calcularValorConvertido = Number(valorAConverter) * taxaCambio;

console.log(`Valor Convertido: ${calcularValorConvertido}`)

/* Desafio 6: Incremento e Decremento */
console.log("\nDesafio 6: Incremento e Decremento")

let contador = 6;
console.log(`Valor inicial: ${contador}`)

contador++;
console.log(`Valor pós-incremento: ${contador}`)

++contador;
console.log(`Valor pré-imcremento: ${contador}`)