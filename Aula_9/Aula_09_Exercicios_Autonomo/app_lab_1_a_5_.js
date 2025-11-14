/* I. Exercícios Essenciais de Integração (1 a 5) */
console.log('I. Exercícios Essenciais de Integração (1 a 5)');

//1. Soma Condicional de Pares
console.log('\n1. Soma Condicional de Pares');
//Tarefa: Crie um ciclo for de 1 a 10.
//Defina um acumulador let somaPares = 0;
//Dentro do ciclo, use um if para verificar se o número atual é par (usando % 2 === 0).
//Se for par, adicione-o a somaPares. Imprima a somaPares final (deve ser 30).
let somaPares = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    somaPares += i;
  }
}
console.log(`Soma de pares: ${somaPares}`);

//2. Validação de Idade Múltipla
console.log('\n2. Validação de Idade Múltipla');
//Tarefa: Defina const limite = 10;. Simule uma lista de 10 idades de 15 a 25.
//Use um ciclo for de 1 a 10. Dentro do ciclo, simule a idade let idade = 15 + i;.
//Use if/else if/else para:
//Se idade > 20: Imprimir "Adulto Plus".
//Se idade >= 18: Imprimir "Adulto Jovem".
//Caso contrário: Imprimir "Menor".
const limite = 10;
for (let i = 1; i <= limite; i++) {
  let idade = 15 + i;
  if (idade > 20) {
    console.log('Adulto Plus');
  } else if (idade >= 18) {
    console.log('Adulto Jovem');
  } else {
    console.log('Menor');
  }
}

//3. Fatorização Simples
console.log('\n3. Fatorização Simples');
//Tarefa: Calcule o fatorial de 5 (5! = $5 \times 4 \times 3 \times 2 \times 1$).
//Defina let fatorial = 1; e const N = 5;.
//Use um ciclo for que comece em 1 e vá até N.
//Dentro do ciclo, use fatorial *= i;. Imprima o fatorial final (deve ser 120).
let fatorial = 1;
const N = 5;
for (let i = 1; i <= N; i++) {
  fatorial *= i;
}
console.log(`Fatorial de ${N}: ${fatorial}`);

//4. Simulação de Senha com break
console.log("\n4. Simulação de Senha com break")
//Tarefa: Defina const senha = "abc"; e let tentativaAtual = "";.
//Use um while(true) (loop infinito intencional).
//Dentro do loop, simule um palpite (ex: tentativaAtual = "abc";).
//Use um if para verificar se tentativaAtual === senha. Se for, imprima "Acesso Concedido" e use break. Caso contrário, imprima "Tente novamente.".
const senha = "abc";
let tentativaAtual = "";
while(true){
    tentativaAtual = "abc";
    if(tentativaAtual === senha){
        console.log("Acesso Concedido");
        break;
    }
}

//5. Contador Múltiplo de 5 (com continue)
console.log("\n5. Contador Múltiplo de 5 (com continue)")
//Tarefa: Crie um ciclo for de 1 a 20.
//Use um if e continue para ignorar (saltar) todos os números que não são múltiplos de 5.
//Imprima apenas os múltiplos de 5 (5, 10, 15, 20).
for (let i = 1; i <= 20; i++) {
    if (i % 5 !== 0) {
      continue;
    }
    console.log(i);
  }
  