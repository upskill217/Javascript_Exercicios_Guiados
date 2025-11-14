/* Parte 1: O Ciclo while */
console.log('\nParte 1: O Ciclo while');

//1. while Básico
console.log('--- Exemplo while ---');
let cont = 0;
while (cont < 4) {
  console.log(`Contagem: ${cont}`);
  cont++; // Ponto crucial: garantir que a condição muda
}

//2. Simulação de Login Condicional
let senhaCorreta = '1234';
let tentativa = '';
let tentativasRestantes = 3;

// Simulação: se a tentativa for vazia, continua a correr
while (tentativa !== senhaCorreta && tentativasRestantes > 0) {
  // Na vida real, usaria um input aqui. Aqui, simulamos:
  console.log(`Tentativa ${4 - tentativasRestantes} de 3...`);

  if (tentativasRestantes === 1) {
    tentativa = senhaCorreta; // Simula a última tentativa certa
  }

  tentativasRestantes--;
}

if (tentativa === senhaCorreta) {
  console.log('Login OK!');
} else {
  console.log('Conta Bloqueada.');
}

/* Parte 2: Ciclos Aninhados e Controlo */
console.log('\nParte 2: Ciclos Aninhados e Controlo');

//1. Demonstração do Fluxo Aninhado
//Mostrar como o ciclo interno corre completamente para cada passo do externo:

console.log('\n--- Ciclos Aninhados ---');
// Tabuadas de 1 e 2
for (let i = 1; i <= 2; i++) {
  // Ciclo Externo (Tabuada)
  console.log(`\n** Tabuada do ${i} **`);
  for (let j = 1; j <= 5; j++) {
    // Ciclo Interno (Multiplicador)
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

//2. Uso de break e continue
//Mostrar a diferença entre as duas palavras-chave:

console.log('\n--- Controlo (break/continue) ---');
for (let num = 1; num <= 10; num++) {
  if (num % 2 !== 0) {
    continue; // Se ímpar, salta esta iteração e vai para a próxima
  }

  if (num > 6) {
    break; // Se o número for maior que 6, para TUDO.
  }

  console.log('Número Par Processado:', num);
}
