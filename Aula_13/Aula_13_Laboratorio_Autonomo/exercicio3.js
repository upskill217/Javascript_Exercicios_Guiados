/* Exercício 3 — Corrida Automobilística */
console.log("\nExercício 3 — Corrida Automobilística");

class Carro {
  constructor(velocidade) {
    this.velocidade = velocidade;
  }
  acelerar() {
    //mostra velocidade atual
    console.log(`velocidade atual: ${this.velocidade}`);
  }
  frear() {
    //aumenta velocidade; ciclo para simular aceleração progressiva.
    while (this.velocidade <= 100) {
      this.velocidade += 3;
    }
  }
  resetar() {
    //reduz velocidade gradualmente.
    this.velocidade -= 5;
  }
  status() {
    //velocidade volta a zero.
    this.velocidade = 0;
  }
}

class Piloto {
  constructor(identificador) {
    this.identificador = identificador;
  }
  dirigir(voltas, carro) {
    //ciclo for para cada volta; altera velocidade usando Carro.
    for (let i = 0; i < voltas; i++) {
      console.log(`\n--- Volta ${i + 1} ---`);
      carro.acelerar();
      carro.frear();
      console.log("O carro aumentou a velocidade...");
      carro.acelerar();
      carro.resetar();
      console.log(
        "O carro reduziu gradualmente a velocidade para entrar na curva..."
      );
      carro.acelerar();
      //descansar 2 segundos em cada 2 voltas
      this.descansar(i + 1, 2000);
    }
  }
  mostrarVelocidade(carro) {
    // imprime velocidade atual do carro.
    carro.acelerar();
  }
  descansar(volta, pausa) {
    // pausa entre voltas.
    //for (let i = 1; i <= voltas; i++) {
    //a cada 2 voltas
    if (volta % 2 === 0) {
      //faz uma pausa de x segundo
      setTimeout(() => {
        console.log(
          `\nVoltas: ${volta} - o piloto ${this.identificador} esta fazendo pausa para descanso...`
        );
      }, pausa);
    }
    // }
  }
  penalizar(carro, houverPenalidade) {
    //reduz velocidade por penalidade
    if (houverPenalidade === true) {
      carro.resetar();
    }
  }
}

class Corrida {
  constructor() {}
  iniciar(voltas, piloto, carro) {
    //ciclo for para cada volta; chama dirigir de cada piloto.
    piloto.dirigir(voltas, carro);
  }
  verificarVencedor(carro1, carro2) {
    //compara velocidades finais.
    if (carro1.acelerar() > carro2.acelerar()) {
      return carro1;
    } else if (carro1.acelerar() < carro2.acelerar()) {
      return carro2;
    } else {
      return "empate";
    }
  }
  relatorio(piloto, carro) {
    //mostra resultados de cada piloto.
    piloto.mostrarVelocidade(carro);
  }
  simularPitStop() {
    //reduz velocidade temporariamente; ciclo para pit stops múltiplos.
  }
}

class Equipe {
  constructor() {}
  prepararCarro(carro) {
    //ajusta carro antes da corrida.
    carro.status();
  }
  ajustarVelocidade(carro) {
    //otimiza aceleração e frenagem.
    carro.acelerar();
    carro.frear();
    console.log("Testar acelerar velocidade.");
    carro.acelerar();
    carro.resetar();
    console.log("Testar reduzir a velocidade.");
    carro.acelerar();
  }
  monitorarPiloto(voltas) {
    //acompanha performance; ciclo de voltas.
  }
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
  }
}

class Juiz {
  constructor() {}
  aplicarPenalidade(piloto, carro) {
    //reduz velocidade por infração ser === true.
    piloto.penalizar(carro, true);
    console.log(
      `O ${piloto.identificador} foi penalizado e sua velocidade foi reduzida!`
    );
    piloto.mostrarVelocidade(carro);
  }
  conferirResultados(corrida, piloto, carro) {
    //verifica velocidade e posição.
    corrida.relatorio(piloto, carro);
  }
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
  }
  alertarPiloto(piloto) {
    //mensagem de aviso.
    console.log(
      `O piloto ${piloto.identificador} foi alertado e pode ser penalizado!`
    );
  }
}

//criação de objetos
const carro1 = new Carro(100);
const carro2 = new Carro(120);

const piloto1 = new Piloto(1);
const piloto2 = new Piloto(2);

const corrida = new Corrida();

const equipa1 = new Equipe();
const equipa2 = new Equipe();

const juiz = new Juiz();

/* TESTE DE FUNÇÕES */
console.log("\n--- INICIANDO ACORRIDA ---");
corrida.iniciar(5, piloto1, carro1);

console.log("\n--- RELATÓRIO DO PILOTO ---");
corrida.relatorio(piloto1, carro1);

console.log("\n--- JUIZ ---");
juiz.alertarPiloto(piloto1);
juiz.aplicarPenalidade(piloto1, carro1);

/*console.log("\n--- PILOTO ---");
piloto1.descansar(5, 1000);

console.log("\n--- EQUIPA ---");
equipe.prepararCarro(carro);
equipe.ajustarVelocidade(carro);


*/
