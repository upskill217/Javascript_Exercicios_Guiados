/* I. Exercícios while (1 a 5) */
console.log("I. Exercícios while (1 a 5)");

//1. Contador de Sessões
console.log("\n1. Contador de Sessões");
//Tarefa: Defina let sessoes = 1; e const maxSessoes = 8;.
//Use um ciclo while para imprimir o número da sessão atual, incrementando até atingir 8.
let sessoes = 1;
const maxSessoes = 8;

while (sessoes <= maxSessoes) {
  console.log(`Sessão: ${sessoes}`);
  sessoes++;
}

//2. Contagem Múltipla
console.log("\n2. Contagem Múltipla");
//Tarefa: Defina let num = 100;.
//Use um ciclo while para decrementar num até que seja menor que 50,
//decrementando em passos de 7 em 7 (-= 7). Imprima cada valor.
let num = 100;
while (num >= 50) {
  num -= 7;
  console.log(`Numéro: ${num}`);
}

//3. Validação de PIN (Simulação de Tentativas)
console.log("\nValidação de PIN (Simulação de Tentativas)");
//Tarefa: Defina const pinCorreto = 123; e let tentativas = 3;.
//Use um ciclo while que corra enquanto tentativas > 0.
//Dentro do ciclo, simule uma tentativa incorreta
//(por exemplo, console.log("PIN Incorreto. Tentativas restantes: " + tentativas);).
//Decremente tentativas. No final (fora do while), imprima "PIN bloqueado.".
const pinCorreto = 123;
let tentativas = 3;

while (tentativas > 0) {
  if (pinCorreto !== 233) {
    console.log("PIN Incorreto. Tentativas restantes: " + tentativas);
    tentativas--;
  }
}
console.log("PIN bloqueado");

//4. Primeiro Divisível
console.log("\n4. Primeiro Divisível");
//Tarefa: Defina let x = 15;.
//Use um ciclo while para encontrar o primeiro número inteiro,
//começando em x, que é divisível por 5 e 3 ao mesmo tempo.
//Use o operador continue ou lógica de break para otimizar
//(mas o while simples funciona).
let x = 15;

while (true) {
  if (x % 5 === 0 && x % 3 === 0) {
    console.log("Primeiro número encontrado:", x);
    break;
  }
  x++;
}

//5. Inversão de Dígitos (Desafio de Lógica)
console.log("\n5. Inversão de Dígitos (Desafio de Lógica)");
//Tarefa: Defina let numero = 54321;.
//Use um ciclo while que corra enquanto numero > 0.
//Dentro do ciclo, use let digito = numero % 10; e numero = Math.floor(numero / 10); para separar os dígitos.
//Imprima cada digito em linhas separadas (o resultado será: 1, 2, 3, 4, 5).
let numero = 54321;

while (numero > 0) {
  let digito = numero % 10;
  numero = Math.floor(numero / 10);
  console.log(digito);
}

/* II. Exercícios Aninhados (6 a 10) */
console.log("\nII. Exercícios Aninhados (6 a 10)");

//6. Padrão de Quadrado
console.log("\n6. Padrão de Quadrado");
//Tarefa: Use ciclos aninhados para imprimir um quadrado de * de 5x5.
//O ciclo externo corre 5 vezes; o interno corre 5 vezes.
//Dica: Use process.stdout.write("* ") em vez de console.log() no ciclo interno, e console.log("");
//no ciclo externo.
for (let i = 0; i < 5; i++) {         
    for (let j = 0; j < 5; j++) {    
        process.stdout.write("* "); 
    }
    console.log("");  
}               

//7. Tabela de Somas
console.log("\n7. Tabela de Somas");
//Tarefa: Use ciclos aninhados para imprimir a soma de todos os pares de números de (1 a 3) e (1 a 3).
for (let i = 1; i <= 3; i++) {          
    for (let j = 1; j <= 3; j++) {      
        console.log(`${i} + ${j} = ${i+j}`);
    }
}

//8. Filtragem em Aninhado (Números Primos Simplificado)
console.log("\n8. Filtragem em Aninhado (Números Primos Simplificado)");
//Tarefa: Itere sobre números de 2 a 10 (ciclo externo i).
//Dentro, crie um ciclo interno (j) de 2 até i - 1.
//Se i % j === 0, imprima: "[i] é divisível por [j]".
for (let i = 2; i < 10; i++) {
  for (let j = 2; j < i - 1; j++) {
    if(i % j === 0){
        console.log(`${i} é divisível por ${j}`);
    }
  }
}

//9. Padrão de Pirâmide Invertida
console.log("\n9. Padrão de Pirâmide Invertida");
//Tarefa: Use ciclos aninhados para criar o seguinte padrão de
//triângulo invertido (5 linhas):
for (let i = 5; i >= 1; i--) {
    let linha = "";
    for (let j = 1; j <= i; j++) {
      linha += "*";
    }
    console.log(`${linha}`);
  }
