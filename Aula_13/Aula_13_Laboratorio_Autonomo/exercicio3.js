/* Exercício 3 — Corrida Automobilística */
console.log("\nExercício 3 — Corrida Automobilística");

const carro = {
  velocidade: 100,
  acelerar() {
    //mostra velocidade atual
    return this.velocidade;
  },
  frear() {
    //aumenta velocidade; ciclo para simular aceleração progressiva.
    while (this.velocidade <= 100) {
      this.velocidade += 3;
    }
  },
  resetar() {
    //reduz velocidade gradualmente.
    this.velocidade -= 5;
  },
  status() {
    //velocidade volta a zero.
    this.velocidade = 0;
  },
};

const piloto = {
  identificador: "Piloto 1",
  dirigir(voltas, carro) {
    //ciclo for para cada volta; altera velocidade usando Carro.
    for (let i = 0; i < voltas; i++) {
      console.log(`--- Volta ${i + 1} ---`);
      console.log(`Velocidade do carro: ${carro.acelerar()}`);
      carro.frear();
      console.log("O carro aumentou a velocidade.");
      console.log(`Nova velocidade do carro: ${carro.acelerar()}`);
      carro.resetar();
      console.log("O carro reduziu gradualmente a velocidade.");
      console.log(`Nova velocidade do carro: ${carro.acelerar()}\n`);
    }
  },
  mostrarVelocidade(carro) {
    // imprime velocidade atual do carro.
    console.log(`Velocidade atual do carro: ${carro.acelerar()}`);
  },
  descansar(voltas, pausa) {
    // pausa entre voltas.
    for (let i = 1; i <= voltas; i++) {
      //a cada 2 voltas
      if (i % 2 === 0) {
        //faz uma pausa de x segundo
        setTimeout(() => {
          console.log(`Voltas: ${i} - o ${this.identificador} esta fazendo pausa para descanso...`);
        }, pausa);
      }
    }
  },
  penalizar(carro, houverPenalidade) {
    //reduz velocidade por penalidade
    if (houverPenalidade === true) {
      carro.resetar();
    }
  },
};

const corrida = {
  iniciar(voltas, piloto, carro) {
    //ciclo for para cada volta; chama dirigir de cada piloto.
    piloto.dirigir(voltas, carro);
  },
  verificarVencedor(carro1, carro2) {
    //compara velocidades finais.
    if (carro1.acelerar() > carro2.acelerar()) {
      return carro1;
    } else if (carro1.acelerar() < carro2.acelerar()) {
      return carro2;
    } else {
      return "empate";
    }
  },
  relatorio(piloto, carro) {
    //mostra resultados de cada piloto.
    piloto.mostrarVelocidade(carro);
  },
  simularPitStop() {
    //reduz velocidade temporariamente; ciclo para pit stops múltiplos.
  },
};

const equipe = {
  prepararCarro(carro) {
    //ajusta carro antes da corrida.
    carro.status();
  },
  ajustarVelocidade(carro) {
    //otimiza aceleração e frenagem.
    console.log(`Velocidade atual do carro: ${carro.acelerar()}`);
    carro.frear();
    console.log("Testar acelerar velocidade.");
    console.log(`Velocidade atual do carro: ${carro.acelerar()}`);
    carro.resetar();
    console.log("Testar reduzir a velocidade.");
    console.log(`Velocidade atual do carro: ${carro.acelerar()}`);
  },
  monitorarPiloto(voltas) {
    //acompanha performance; ciclo de voltas.
  },
  estrategia(estrategia, carro) {
    //decide quando piloto deve acelerar ou reduzir.
    switch (estrategia) {
      case "acelerar":
        carro.frear();
        break;
      case "reduzir":
        carro.resetar();
        break;
      default:
        console.log("Estratégia inválida");
    }
  },
};

const juiz = {
  aplicarPenalidade(piloto, carro) {
    //reduz velocidade por infração ser === true.
    piloto.penalizar(carro, true);
    console.log(
      `O ${piloto.identificador} foi penalizado e sua velocidade foi reduzida!`
    );
    console.log(`Velocidade atual do carro: ${carro.acelerar()}`);
  },
  conferirResultados(corrida, piloto, carro) {
    //verifica velocidade e posição.
    corrida.relatorio(piloto, carro);
  },
  relatorioFinal(corrida, carro1, carro2) {
    //imprime classificação final.
    let vencedor = corrida.verificarVencedor(carro1, carro2);
    if (vencedor === carro1) {
      console.log(`O carro 1 foi o vencedor!`);
    } else if (vencedor === carro2) {
      console.log(`O carro 2 foi o vencedor!`);
    } else {
      console.log(`Houve empate!`);
    }
  },
  alertarPiloto(piloto) {
    //mensagem de aviso.
    console.log(
      `O ${piloto.identificador} foi alertado e pode ser penalizado!`
    );
  },
};

/* TESTE DE FUNÇÕES */
console.log("\n--- INICIANDO ACORRIDA ---\n");
corrida.iniciar(5, piloto, carro);

console.log("--- RELATÓRIO DO PILOTO ---");
corrida.relatorio(piloto, carro);

console.log("\n--- JUIZ ---");
juiz.alertarPiloto(piloto);
juiz.aplicarPenalidade(piloto, carro);

console.log("\n--- EQUIPA ---");
equipe.prepararCarro(carro);
equipe.ajustarVelocidade(carro);

console.log("\n--- PILOTO ---");
piloto.descansar(10, 1000);
