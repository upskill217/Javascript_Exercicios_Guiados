/* Exercício 3 — Corrida Automobilística */
console.log("\nExercício 3 — Corrida Automobilística");

const carro = {
  acelerar() {
    //mostra velocidade atual
  },
  frear() {
    //aumenta velocidade; ciclo para simular aceleração progressiva.
  },
  resetar() {
    //reduz velocidade gradualmente.
  },
  status() {
    //velocidade volta a zero.
  },
};

const piloto = {
  dirigir(voltas) {
    //ciclo for para cada volta; altera velocidade usando Carro.
  },
  mostrarVelocidade() {
    // imprime velocidade atual do carro.
  },
  descansar() {
    // pausa entre voltas.
  },
  penalizar() {
    //reduz velocidade por penalidade
  },
};

const orrida = {
  iniciar(voltas) {
    //ciclo for para cada volta; chama dirigir de cada piloto.
  },
  verificarVencedor() {
    //compara velocidades finais.
  },
  relatorio() {
    //mostra resultados de cada piloto.
  },
  simularPitStop() {
    //reduz velocidade temporariamente; ciclo para pit stops múltiplos.
  },
};

const equipe = {
  prepararCarro() {
    //ajusta carro antes da corrida.
  },
  ajustarVelocidade() {
    //otimiza aceleração e frenagem.
  },
  monitorarPiloto() {
    //acompanha performance; ciclo de voltas.
  },
  estrategia() {
    //decide quando piloto deve acelerar ou reduzir.
  },
};

const juiz = {
  aplicarPenalidade(piloto) {
    //reduz velocidade por infração.
  },
  conferirResultados() {
    //verifica velocidade e posição.
  },
  relatorioFinal() {
    //imprime classificação final.
  },
  alertarPiloto(piloto) {
    //mensagem de aviso.
  },
};
