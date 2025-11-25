/* Exercício 1 — Sistema Bancário Complexo */
console.log("\n--- Exercício 1 — Sistema Bancário Complexo ---");

//classe/objeto Conta
class Conta {
  constructor(saldo) {
    this.saldo = saldo;
  }
  depositar(valor) {
    //adiciona valor ao saldo; mostrar saldo.
    this.saldo += valor;
    this.mostrarSaldo();
  }
  levantar(valor) {
    //subtrai valor do saldo se houver saldo; mostrar saldo.
    if (this.saldo >= valor) {
      this.saldo -= valor;
      this.mostrarSaldo();
    }
  }
  aplicarJuros(taxa, anos) {
    //ciclo for para aplicar juros ano a ano; mostrar saldo em cada ano.
    for (let i = 1; i <= anos; i++) {
      this.saldo += this.saldo * taxa;
      console.log(`- ANO ${i} -`);
      this.mostrarSaldo();
    }
  }
  mostrarSaldo() {
    //→ imprime saldo atual.
    console.log(`SALDO ATUAL: ${this.saldo.toFixed(2)}`);
  }
}

//classe/objeto Cliente
class Cliente {
  constructor(identificador, conta) {
    this.identificador = identificador;
    this.conta = conta;
  }

  transferir(valor, outraConta) {
    //retira de sua conta se houver saldo e adiciona à outra.
    if (valor <= this.conta.saldo) {
      this.conta.levantar(valor);
      outraConta.depositar(valor);
    } else {
      console.log("ERRO: Saldo menor que o valor!");
    }
  }
  mostrarSaldo() {
    //mostra saldo da conta.
    this.conta.mostrarSaldo();
  }
  aniversario(anos, bonus) {
    //bônus de saldo anual; use ciclo for para anos passados.
    for (let i = 1; i <= anos; i++) {
      this.conta.saldo += this.conta.saldo * bonus;
    }
  }
  presentear(valor, outroCliente) {
    //transfere valor a outro cliente.
    this.transferir(valor, outroCliente.conta);
  }
}

//classe/objeto Banco
class Banco {
  constructor() {
    this.saldo = 100000;
    this.jurosDiario = 0.01;
  }

  simularDia(cliente, dia) {
    //aplica juros diários em cada cliente usando ciclo.
    for (let i = 1; i <= dia; i++) {
      let valor = Math.floor(Math.random() * 1000);
      if (Math.random() < 0.5) {
        //saca e paga juros diario
        console.log(`Dia ${i} - Sacar ${valor.toFixed(2)}`);
        let valorJuros = valor * this.jurosDiario;
        valor += valorJuros;
        console.log(
          `Com juros diario de ${this.jurosDiario} fica ${valor.toFixed(2)}`
        );
        cliente.conta.levantar(valor);
        this.saldo += valor * this.jurosDiario;
      } else {
        //deposita e paga juros diario
        console.log(`Dia ${i} - Depositar ${valor.toFixed(2)}`);
        let valorJuros = valor * this.jurosDiario;
        valor += valorJuros;
        console.log(
          `Com juros diario de ${this.jurosDiario} fica ${valor.toFixed(2)}`
        );
        cliente.conta.depositar(valor);
        this.saldo += valor * this.jurosDiario;
      }
    }
    this.resumoTotal();
  }
  relatorio(cliente) {
    //imprime saldo de todos os clientes.
    cliente.mostrarSaldo();
  }
  aplicarTaxaDia(taxa, cliente) {
    //aplica taxa diária a todas contas
    //  cliente;
  }
  resumoTotal() {
    //soma e mostra saldo total do banco
    console.log(`\nBANCO - SALDO TOTAL: ${this.saldo.toFixed(2)}.`);
  }
}

//CRIAÇÃO DE OBJETOS
const conta1 = new Conta(2580);
const cliente1 = new Cliente(1, conta1);
const conta2 = new Conta(1320);
const cliente2 = new Cliente(2, conta2);
const banco = new Banco();

//conta
console.log("\n--- MOSTRAR SALDO DA CONTA 1 ---");
conta1.mostrarSaldo();
console.log("\n--- DEPOSITAR ---");
conta1.depositar(470);
console.log("\n--- LEVANTAR---");
conta1.levantar(100);
console.log("\n--- APLICAR JUROS ---");
conta1.aplicarJuros(0.02, 5);

console.log("\n--- MOSTRAR SALDO DA CONTA 2 ---");
conta1.mostrarSaldo();
console.log("\n--- DEPOSITAR ---");
conta1.depositar(260);
console.log("\n--- LEVANTAR---");
conta1.levantar(420);
console.log("\n--- APLICAR JUROS ---");
conta1.aplicarJuros(0.02, 3);

//cliente
console.log("\nTESTE CLIENTE 1");
cliente1.mostrarSaldo();
console.log("\n--- BONUS ANIVERSARIO ---");
cliente1.aniversario(1, 0.02);
cliente1.mostrarSaldo();

console.log("\nTESTE CLIENTE 2");
cliente2.mostrarSaldo();
console.log("\n--- BONUS ANIVERSARIO ---");
cliente1.aniversario(1, 0.02);
cliente2.mostrarSaldo();

console.log("\nCLIENTE 1 - PRESENTEAR CLIENTE 2");
cliente1.presentear(150, cliente2);

console.log("\nSALDO DO CLIENTE 2 DEPOIS DE SER PRESENTEADO PELO CLIENTE 2");
cliente2.mostrarSaldo();

console.log("\nCLIENTE 2 - PRESENTEAR CLIENTE 1");
cliente2.presentear(350, cliente1);

console.log("\nSALDO DO CLIENTE 1 DEPOIS DE SER PRESENTEADO PELO CLIENTE 2");
cliente1.mostrarSaldo();

//Banco
console.log("\n--- TESTE BANCO ---");
banco.resumoTotal();

console.log("\nBANCO - MOSTRAR RELATORIO DO CLIENTE 1");
banco.relatorio(cliente1);
console.log("\nBANCO - SIMULAÇÃO DIARA DO CLIENTE 1");
banco.simularDia(cliente1, 7);
console.log("\nBANCO - MOSTRAR RELATORIO DO CLIENTE 1");
banco.relatorio(cliente2);

console.log("\nBANCO - MOSTRAR RELATORIO DO CLIENTE 2");
banco.relatorio(cliente2);
console.log("\nBANCO - SIMULAÇÃO DIARA DO CLIENTE 2");
banco.simularDia(cliente2, 7);
console.log("\nBANCO - MOSTRAR RELATORIO DO CLIENTE 2");
banco.relatorio(cliente2);

//classe/objeto Gerente
class Gerente {
  constructor() {}
  auditar(cliente) {
    // imprime histórico e saldo da conta.
    console.log(`--- Histórico de ${cliente.identificador} ---`);
    cliente.mostrarSaldo();
  }
  bonificar(cliente, valor) {
    // adiciona bônus ao saldo do cliente.
    console.log(`Bonificar ${cliente.identificador} com valor de ${valor}`);
    cliente.conta.depositar(valor);
    cliente.mostrarSaldo();
  }
  reduzirSalario(cliente, valor) {
    // subtrai valor com segurança.
    console.log(
      `Reduzir o salario do ${cliente.identificador} com valor de ${valor}`
    );
    cliente.conta.levantar(valor);
  }
  mostrarResumo(banco) {
    // mostra resumo do banco e clientes
    banco.resumoTotal();
  }
}

//classe/objeto CaixaEletronico
class CaixaEletronico {
  constructor() {}
  sacar(cliente, valor) {
    cliente.conta.levantar(valor);
  }
  depositar(cliente, valor) {
    cliente.conta.depositar(valor);
  }
  mostrarSaldo(cliente) {
    cliente.mostrarSaldo();
  }
  simularTransaccoes(banco, cliente, dias) {
    //  simular transações diárias.
    banco.simularDia(cliente, dias);
  }
}
