/* Exercício 1 — Criar Objeto Simples */
console.log("Exercício 1 — Criar Objeto Simples");
//Crie um objeto pessoa com nome e idade. Mostre no console: "Nome: X, Idade: Y".
const pessoa = {
  nome: "Danilson Sanches",
  idade: 43,
};
//mostrar no console
console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);

/* Exercício 2 — Função que Recebe Objeto */
console.log("\nExercício 2 — Função que Recebe Objeto");
//Crie uma função mostrarInfo(pessoa) que recebe um objeto e exibe seus dados formatados.
function mostrarInfo(pessoa) {
  for (let i in pessoa) {
    console.log(`${i}: ${pessoa[i]}`);
  }
}
//testar função
mostrarInfo(pessoa);

/* Exercício 3 — Adicionar Método a Objeto */
console.log("\nExercício 3 — Adicionar Método a Objeto");
//Crie um objeto carro com marca, modelo e um método descrever() que mostra: "Carro: marca modelo".
const carro = {
  marca: "Mercedes",
  modelo: "BENZ 2025",
  descrever() {
    console.log(`Carro: ${this.marca} ${this.modelo}.`);
  },
};
//testar função
carro.descrever();

/* Exercício 4 — Atualizar Propriedade com Função */
console.log("\nExercício 4 — Atualizar Propriedade com Função");
//Crie uma função fazerAniversario(pessoa) que aumenta a idade em 1.
function fazerAniversario(pessoa) {
  return (pessoa.idade += 1);
}
//testar funções
fazerAniversario(pessoa);
mostrarInfo(pessoa);

/* Exercício 5 — Criar Objeto com Método de Cálculo */
console.log("\nExercício 5 — Criar Objeto com Método de Cálculo ");
//Crie um objeto retangulo com largura, altura e um método area() que calcula largura × altura.
const retangulo = {
  largura: 25,
  altura: 1.65,
  area() {
    return this.largura * this.altura;
  },
};
//testar função
console.log(`A area do retangulo é ${retangulo.area()}.`);

/* Exercício 6 — Função com Callback e Objeto */
console.log("\nExercício 6 — Função com Callback e Objeto");
//Crie uma função processar(obj, callback) que aplica uma operação sobre o objeto.
function processar(obj, callback) {
  return callback(obj);
}
//testar função
processar(retangulo, function (r) {
  r.perimetro = 2 * (r.altura + r.largura);
  console.log(`O perímetro do retangulo é ${r.perimetro}.`);
});

/* Exercício 7 — Objetos com Função Interna */
console.log("\nExercício 7 — Objetos com Função Interna");
//Crie um objeto aluno com notas e um método calcularMedia() que devolve a média das 3 notas.
const aluno = {
  nota1: 14,
  nota2: 13,
  nota3: 9.5,
  calcularMedia() {
    media = (this.nota1 + this.nota2 + this.nota3) / 3;
    return media;
  },
};
//testar função
console.log(`A média do aluno é ${aluno.calcularMedia()}.`);

/* Exercício 8 — Funções que Criam Objetos (Factory) */
console.log("\nExercício 8 — Funções que Criam Objetos (Factory) ");
//Crie uma função criarPessoa(nome, idade) que retorna um objeto pessoa com método falar()
function criarPessoa(nome, idade) {
  return {
    nome: nome,
    idade: idade,
    falar() {
      console.log(`A pessoa com nome ${this.nome}, falou: Olá!`);
    },
  };
}
//testar
const maria = criarPessoa("Maria", 24);
mostrarInfo(maria);
maria.falar();

const joao = criarPessoa("João", 44);
mostrarInfo(joao);
joao.falar();

/* Exercício 9 — Banco Simples com Depósito e Levantamento */
console.log("\nExercício 9 — Banco Simples com Depósito e Levantamento");
//Crie um objeto contaBancaria com titular e saldo
//com métodos: depositar(valor), levantar(valor) e mostrarSaldo()
const contaBancaria = {
  titular: "Luana Barros",
  saldo: 1000,
  depositar(valor) {
    this.saldo += valor;
  },
  levantar(valor) {
    this.saldo -= valor;
  },
  mostarSaldo() {
    console.log(`O saldo de ${this.titular} é  ${this.saldo}€`);
  },
};

//DESAFIO EXTRA: Crie uma função externa operacaoSegura(conta, valor, funcao)
// que executa a função apenas se o valor for positivo.
function operacaoSegura(conta, valor, callback) {
  if (valor > 0) {
    return callback.call(conta, valor);
  } else {
    console.log("Operação inválida: o valor deve ser positivo.");
    return null;
  }
}

//testar funçãoo
operacaoSegura(contaBancaria, 50, contaBancaria.depositar);
operacaoSegura(contaBancaria, 500, contaBancaria.levantar);
operacaoSegura(contaBancaria, -100, contaBancaria.depositar);
//ver saldo
contaBancaria.mostarSaldo();

/* Exercício 10 — Comparador de Objetos (Callback) */
console.log("\nExercício 10 — Comparador de Objetos (Callback)");
//Crie uma função compararObjetos(obj1, obj2, callback)
//que recebe dois objetos e executa um callback que decide qual dos dois “ganha”.
function compararObjetos(obj1, obj2, callback) {
  return callback(obj1, obj2);
}

function maiorIdade(p1, p2) {
  // Dica: usar operador condicional ( ? : )
  return p1.idade > p2.idade ? p1 : p2;
}

function maiorSalario(p1, p2) {
  // Dica: usar operador condicional ( ? : )
  return p1.salario > p2.salario ? p1 : p2;
}

function maiorPontuacao(p1, p2) {
  // Dica: usar operador condicional ( ? : )
  return p1.pontuacao > p2.pontuacao ? p1 : p2;
}

//objetos pessoas com nome e idade
const pessoa1 = { nome: "João", idade: 30 };
const pessoa2 = { nome: "Maria", idade: 25 };
//teste comparar pessoa com maior idade
let pessoaMaiorDeIdade = compararObjetos(pessoa1, pessoa2, maiorIdade);
console.log(`A pessoa com maior idade é ${pessoaMaiorDeIdade.nome}.`);

//objetos funcionarios com nome e salario
const funcionario1 = { nome: "Miguel", salario: 5000 };
const funcionario2 = { nome: "Daniela", salario: 6500 };
//teste comparar funcionario com maior salario
let funcionarioMaiorSalario = compararObjetos(funcionario1, funcionario2, maiorSalario);
console.log(`O funcionario com maior salario é ${funcionarioMaiorSalario.nome}.`);

//objetos jogadores com nome e pontuação
const jogador1 = { nome: "Danilson", pontuacao: 1000 };
const jogador2 = { nome: "Daniel", pontuacao: 6500 };
//teste comparar jogador com maior pontuaçao
let jogadorMaiorPontuacao = compararObjetos(jogador1, jogador2, maiorPontuacao);
console.log(`O jogador com maior pontuacao é ${jogadorMaiorPontuacao.nome}.`);

/* Exercício 11 — Simulação de Votação com Ciclo */
console.log("\nExercício 11 — Simulação de Votação com Ciclo");
//Crie um objeto votacao com:
//candidato1 → votos (inicia em 0)
//candidato2 → votos (inicia em 0)
//Funções necessárias:
//votar(candidato) → adiciona 1 voto ao candidato escolhido
//mostrarResultado() → mostra qual candidato venceu ou se houve empate
//iniciarVotacao(totalVotos) → usa um ciclo for para simular votos aleatórios
const votacao = {
  candidato1: 0,
  candidato2: 0,
  votar(candidato) {
    if (candidato === "candidato1") {
      this.candidato1 += 1;
    } else if (candidato === "candidato2") {
      this.candidato2 += 1;
    }
  },
  mostrarResultado() {
    if (this.candidato1 > this.candidato2) {
      console.log(`O candidato 1 venceu com ${this.candidato1} votos.`);
    } else if (this.candidato2 > this.candidato1) {
      console.log(`O candidato 2 venceu com ${this.candidato2} votos.`);
    } else {
      console.log("Houve empate entre os dois candidatos.");
    }
  },
  iniciarVotacao(totalVotos) {
    for (let i = 0; i < totalVotos; i++) {
      if (Math.random() < 0.5) {
        votacao.votar("candidato1");
      } else {
        votacao.votar("candidato2");
      }
    }
  },
};

//Simular 20 votos
console.log("\nSimular 20 votos");
votacao.iniciarVotacao(20);
votacao.mostrarResultado();

//Simular 50 votos
console.log("\nSimular 50 votos");
votacao.iniciarVotacao(50);
votacao.mostrarResultado();