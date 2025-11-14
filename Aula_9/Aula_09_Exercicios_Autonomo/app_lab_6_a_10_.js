/* II. Desafios Opcionais (6 a 10) */
console.log('II. Desafios Opcionais (6 a 10)');

//6. Padrão de Triângulo Retângulo (Aninhado com Controlo)
console.log('\n6. Padrão de Triângulo Retângulo (Aninhado com Controlo)');
//Tarefa: Crie um padrão de triângulo retângulo de
//asteriscos (5 linhas), onde o ciclo interno só
//imprime * se o índice da coluna for menor ou igual
//ao índice da linha.
for (let i = 5; i >= 1; i--) {
  let linha = '';
  for (let j = 1; j <= 5; j++) {
    if (j <= i) {
      linha += '*';
    } else {
      linha += ' ';
    }
  }
  console.log(linha);
}

//7. Taxa de Aprovação Simulada
console.log('\n7. Taxa de Aprovação Simulada');
//Tarefa: Simule a nota de 20 alunos (usando for).
//Use if/else para classificar se a nota > 9.5 é "Aprovado".
//Use acumuladores para contar o total de aprovados
//e reprovados.
let aprovados = 0;
let reprovados = 0;

for (let n = 1; n <= 20; n++) {
  if (n > 9.5) {
    aprovados++;
  } else {
    reprovados++;
  }
}
console.log(`Aprovados: ${aprovados} - Reprovados: ${reprovados}`);

//8. Geração de Tabuada com Salto
console.log('\n8. Geração de Tabuada com Salto');
//Tarefa: Gere a tabuada do 9 (de 1 a 10).
//Use a instrução continue para saltar a
//multiplicação por 5, sem a imprimir.
for (let i = 1; i <= 10; i++) {
  if (i % 5 !== 0) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log('\n');
  } else {
    continue;
  }
}

//9. Soma até 100 (while)
console.log('\n9. Soma até 100 (while)');
//Tarefa: Defina let soma = 0; e let numero = 1;.
//Use um ciclo while que corra enquanto soma for menor que 100.
//Dentro do ciclo, some numero a soma e incremente numero.
//Imprima quantos números (qual o valor de numero final)
//foram necessários para que a soma atingisse ou ultrapassasse 100.
let soma = 0;
let numero = 1;

while (soma < 100) {
  soma += numero;
  numero++;
}
console.log(`Valor de numero final: ${numero}`);

//10. Calculadora de Potência com if/else (Números Negativos)
console.log('\n10. Calculadora de Potência com if/else (Números Negativos)');
//Tarefa: Defina const base = 3; e const expoente = -2;.
//Use um if/else para verificar se o expoente é negativo.
//Se for negativo, imprima "Operação não suportada."
//Se for positivo ou zero,
//use um ciclo for para calcular e imprimir a potência
const base = 3;
const expoente = -2;

if (expoente < 0) {
  console.log('Operação não suportada.');
} else {
  let resultado = 1;
  for (let i = 0; i < expoente; i++) {
    resultado *= base;
  }
  console.log(`Resultado da potência: ${resultado}`);
}
