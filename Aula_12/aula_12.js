/* criando um objeto */
const aluno = {
  nome: "Danilson",
  idade: 43,
  curso: "Informática",
  apresentar() {
    console.log(`Olá, sou o ${this.nome} e tenho ${this.idade} anos.`);
  },
};

/* aceder as propriedades do objeto */
console.log(aluno.nome);
console.log(aluno["idade"]);

/* chamar o metodo dentro do objeto */
aluno.apresentar();

/* adicionar propriedade */
aluno.turma = "12ºA";

/* alterar propriedade */
aluno.idade = 40;

/* adicionar propriedade */
delete aluno.curso;

/* percorrer propriedades */
for (let chave in aluno) {
  console.log(chave + ": " + aluno[chave]);
}

/* Objetos dentro de objetos - Nested Objects) */
const pessoa = {
  nome: "Ana",
  idade: 29,
  endereco: {
    rua: "Rua das Flores",
    cidade: "Lisboa",
    pais: "Portugal",
  },
};

/* chamar o objeto dentro do objeto - Nested Objects */
console.log(pessoa.endereco.cidade);
