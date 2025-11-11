//Parte 1: if/else e Lógica Composta
console.log("\nParte 1: if/else e Lógica Composta")

//1. Condição Simples
//Verificar se a idade permite acesso:
const idadeMinima = 16;
let idadeUsuario = 15;

if (idadeUsuario >= idadeMinima) {
  console.log("Acesso concedido: É maior que a idade mínima.");
} else {
  console.log("Acesso negado: Idade insuficiente.");
}
//2. Condição Lógica Composta (&&)
//Usar o operador lógico AND para testar dois critérios:
const temBilhete = true;
const horaCerta = false;

// Acesso permitido se TIVER bilhete E for a HORA CERTA
if (temBilhete && horaCerta) {
  console.log("Entrada autorizada.");
} else {
  console.log("Entrada pendente. Verifique o bilhete ou a hora.");
}

//Parte 2: if/else if e switch
console.log("\nParte 2: if/else if e switch")

//1. Sistema de Classificação de Notas
//Demonstrar o uso e a importância da ordem das condições:
let notaExame = 16;
console.log(`\nA sua nota é:: ${notaExame}`)

if (notaExame > 17) {
  console.log("Classificação: Distinção.");
} else if (notaExame > 13) {
  console.log("Classificação: Bom."); // Esta linha é executada
} else if (notaExame >= 9.5) {
  console.log("Classificação: Suficiente.");
} else {
  console.log("Classificação: Reprovado.");
}

//Mudar a nota para 8
notaExame = 8;
console.log(`\nA sua nota é:: ${notaExame}`)

if (notaExame > 17) {
  console.log("Classificação: Distinção.");
} else if (notaExame > 13) {
  console.log("Classificação: Bom."); // Esta linha é executada
} else if (notaExame >= 9.5) {
  console.log("Classificação: Suficiente.");
} else {
  console.log("Classificação: Reprovado.");
}

//Mudar a nota para 19
notaExame = 19;
console.log(`\nA sua nota é:: ${notaExame}`)

if (notaExame > 17) {
  console.log("Classificação: Distinção.");
} else if (notaExame > 13) {
  console.log("Classificação: Bom."); // Esta linha é executada
} else if (notaExame >= 9.5) {
  console.log("Classificação: Suficiente.");
} else {
  console.log("Classificação: Reprovado.");
}

//2. Escolha com switch
//Simular a escolha de um menu de opções:

const opcao = "Ver Saldo";

switch (opcao) {
  case "Levantar":
    console.log("A processar levantamento...");
    break;
  case "Ver Saldo":
    console.log("O seu saldo é de 500 EUR.");
    break;
  case "Transferir":
    console.log("Aceder menu de transferência.");
    break;
  default:
    console.log("Opção inválida.");
}

//3. Condições combinadas com ternário
//Introduzir ternário como atalho rápido para if/else simples:
let idade = 20;
let status = (idade >= 18) ? "Adulto" : "Menor";
console.log(`\nStatus: ${status}`);