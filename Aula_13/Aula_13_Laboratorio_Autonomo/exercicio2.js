/* Exercício 2 — Escola e Provas */
console.log("\nExercício 2 — Escola e Provas");

const aluno = {
  notaFinal: 0,
  realizarProva(prova) {
    //ciclo para responder todas as questões; atribuir pontos aleatórios.
  },
  calcularMedia() {
    //soma notas e divide por quantidade de provas simuladas.
  },
  estudar(horas) {
    //incrementa notaFinal baseado em horas estudadas.
  },
  receberBonus(pontos) {
    //adiciona pontos extras à notaFinal.
  },
};

const prova = {
  aplicarQuestao(aluno) {
    //ciclo para cada questão; gera nota aleatória.
  },
  corrigir() {
    //ajusta notas baseadas em respostas.
  },
  mostrarResultado() {
    //imprime resultado do aluno.
  },
  simular() {
    //ciclo para aplicar prova a múltiplos alunos.
  },
};

const professor = {
  aplicarProva(aluno, prova) {
    //chama método do aluno para responder prova.
  },
  corrigirProva(aluno, prova) {
    //corrige usando métodos da prova.
  },
  darBonus(aluno) {
    //incrementa pontos extra.
  },
  mostrarNotas(alunos) {
    // imprime notaFinal do aluno.
  },
};

const disciplina = {
  iniciarAula() {
    // ciclo para todos os alunos participarem.
  },
  aplicarProvas() {
    // chama métodos de aplicarProva do professor.
  },
  resumo() {
    //mostra todas notas.
  },
  ranking() {
    //compara notas de alunos e mostra ordem.
  },
};

const secretaria = {
  registarAluno(aluno) {
    //adiciona aluno ao sistema
  },
  gerarBoletim(aluno) {
    //imprime boletim.
  },
  simularDia() {
    //ciclo para todas atividades escolares.
  },
  atualizarNotas(aluno) {
    //ajusta notaFinal conforme regras.
  },
};
