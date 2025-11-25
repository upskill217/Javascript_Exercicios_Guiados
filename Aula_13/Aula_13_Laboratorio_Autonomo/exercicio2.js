/* Exercício 2 — Escola e Provas */
console.log("\nExercício 2 — Escola e Provas");

class Aluno {
  constructor() {
    this.notaFinal = 0;
  }
  realizarProva(prova) {
    //ciclo para responder todas as questões; atribuir pontos aleatórios.
    this.notaFinal += prova.aplicarQuestao();
    console.log("Nota Final: ", this.notaFinal);
  }
  calcularMedia() {
    //soma notas e divide por quantidade de provas simuladas.
  }
  estudar(horas) {
    //incrementa notaFinal baseado em horas estudadas.
    for (let i = 1; i <= horas; i++) {
      this.notaFinal += i;
    }
  }
  receberBonus(pontos) {
    //adiciona pontos extras à notaFinal
    this.notaFinal += pontos;
  }
}

class Prova {
  constructor() {
    this.questoes = 10;
  }
  aplicarQuestao() {
    //ciclo para cada questão; gera nota aleatória.
    let notaTotal = 0;
    for (let i = 1; i <= this.questoes; i++) {
      //gera a nota
      let notaAleatoria = Math.floor(Math.random() * 3);
      console.log("Nota aleatoria: ", notaAleatoria);
      notaTotal += notaAleatoria;
      console.log(`Questão ${i} - Nota: ${notaTotal}`);
    }
    return notaTotal;
  }
  corrigir() {
    //ajusta notas baseadas em respostas.
  }
  mostrarResultado() {
    //imprime resultado do aluno.
  }
  simular() {
    //ciclo para aplicar prova a múltiplos alunos.
  }
}

const aluno1 = new Aluno();
const prova1 = new Prova();
aluno1.realizarProva(prova1);

class Professor {
  constructor() {}
  aplicarProva(aluno) {
    //chama método do aluno para responder prova.
  }
  corrigirProva(aluno, prova) {
    //corrige usando métodos da prova.
  }
  darBonus(aluno) {
    //incrementa pontos extra.
  }
  mostrarNotas(alunos) {
    // imprime notaFinal do aluno.
  }
}

class Disciplina {
  constructor() {}
  iniciarAula() {
    // ciclo para todos os alunos participarem.
  }
  aplicarProvas() {
    // chama métodos de aplicarProva do professor.
  }
  resumo() {
    //mostra todas notas.
  }
  ranking() {
    //compara notas de alunos e mostra ordem.
  }
}

class Secretaria {
  constructor() {}
  registarAluno(aluno) {
    //adiciona aluno ao sistema
  }
  gerarBoletim(aluno) {
    //imprime boletim.
  }
  simularDia() {
    //ciclo para todas atividades escolares.
  }
  atualizarNotas(aluno) {
    //ajusta notaFinal conforme regras.
  }
}
