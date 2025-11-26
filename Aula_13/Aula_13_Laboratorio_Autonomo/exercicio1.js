/* Exercício 1 — Sistema Bancário Complexo */
console.log("\n--- Exercício 1 — Sistema Bancário Complexo ---");

//classe/objeto Conta
class Conta {
  constructor(saldo) {
    this.saldo = saldo;
    this.historicos = [];
  }
  depositar(valor) {
    //adiciona valor ao saldo; mostrar saldo.
    this.saldo += valor;
    const operacao = { tipo: "DEPOSITO", valor };
    this.historicos.push(operacao);
    this.mostrarSaldo();
  }
  levantar(valor) {
    //subtrai valor do saldo se houver saldo; mostrar saldo.
    if (this.saldo >= valor) {
      this.saldo -= valor;
      const operacao = { tipo: "SAQUE", valor };
      this.historicos.push(operacao);
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
    this.transaccoes = [];
  }

  simularDia(cliente, dia) {
    //aplica juros diários em cada cliente usando ciclo.
    for (let i = 1; i <= dia; i++) {
      let valor = Math.floor(Math.random() * 1000);
      if (Math.random() < 0.5) {
        //salva o tipo de transacao diaria
        let transacao = { dia: i, tipo: "SAQUE", valor };
        this.transaccoes.push(transacao);
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
        //salva o tipo de transacao diaria
        let transacao = { dia: i, tipo: "DEPOSITO", valor };
        this.transaccoes.push(transacao);
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

//classe/objeto Gerente
class Gerente {
  constructor() {}
  auditar(cliente) {
    // imprime histórico e saldo da conta.
    console.log(`--- Histórico de CLIENTE ${cliente.identificador} ---`);
    let operacoes = cliente.conta.historicos;
    for (let operacao of operacoes) {
      console.log(operacao);
    }
    cliente.mostrarSaldo();
  }
  bonificar(cliente, valor) {
    // adiciona bônus ao saldo do cliente.
    console.log(
      `Bonificar CLIENTE ${cliente.identificador} com valor de ${valor}`
    );
    cliente.conta.depositar(valor);
    cliente.mostrarSaldo();
  }
  reduzirSalario(cliente, valor) {
    // subtrai valor com segurança.
    console.log(
      `Reduzir o salario do CLIENTE ${cliente.identificador} com valor de ${valor}`
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
    //  simular transações diárias
    banco.simularDia(cliente, dias);
    for(let transacao of banco.transaccoes){
      console.log(transacao);
    }
  }
}

//CRIAÇÃO DE OBJETOS DO TIPO CONTA
const conta1 = new Conta(2580);
const conta2 = new Conta(1320);

//conta
console.log("\n--- MOSTRAR SALDO DA CONTA 1 ---");
conta1.mostrarSaldo();
console.log("\n--- DEPOSITAR ---");
conta1.depositar(470);
console.log("\n--- LEVANTAR---");
conta1.levantar(100);
console.log("\n--- APLICAR JUROS ---");
conta1.aplicarJuros(0.02, 5);
console.log("------");

console.log("\n--- MOSTRAR SALDO DA CONTA 2 ---");
conta2.mostrarSaldo();
console.log("\n--- DEPOSITAR ---");
conta2.depositar(260);
console.log("\n--- LEVANTAR---");
conta2.levantar(420);
console.log("\n--- APLICAR JUROS ---");
conta2.aplicarJuros(0.02, 3);
console.log("------");

//CRIAÇÃO DE OBJETOS DO TIPO CLIENTE
const cliente1 = new Cliente(1, conta1);
const cliente2 = new Cliente(2, conta2);

//cliente
console.log("\nTESTE CLIENTE 1");
cliente1.mostrarSaldo();
console.log("\n--- BONUS ANIVERSARIO ---");
cliente1.aniversario(1, 0.02);
cliente1.mostrarSaldo();
console.log("------");

console.log("\nTESTE CLIENTE 2");
cliente2.mostrarSaldo();
console.log("\n--- BONUS ANIVERSARIO ---");
cliente1.aniversario(1, 0.02);
cliente2.mostrarSaldo();
console.log("------");

console.log("\nCLIENTE 1 - PRESENTEAR CLIENTE 2");
cliente1.presentear(150, cliente2);

console.log("\nSALDO DO CLIENTE 2 DEPOIS DE SER PRESENTEADO PELO CLIENTE 2");
cliente2.mostrarSaldo();

console.log("\nCLIENTE 2 - PRESENTEAR CLIENTE 1");
cliente2.presentear(350, cliente1);

console.log("\nSALDO DO CLIENTE 1 DEPOIS DE SER PRESENTEADO PELO CLIENTE 2");
cliente1.mostrarSaldo();
console.log("------");

//CRIAÇÃO DE OBJETO DO TIPO BANCO
const banco = new Banco();

//Banco
console.log("\n--- TESTE BANCO ---");
banco.resumoTotal();

console.log("\nBANCO - MOSTRAR RELATORIO DO CLIENTE 1");
banco.relatorio(cliente1);
console.log("\nBANCO - MOSTRAR RELATORIO DO CLIENTE 1");
banco.relatorio(cliente1);
console.log("------");

console.log("\nBANCO - MOSTRAR RELATORIO DO CLIENTE 2");
banco.relatorio(cliente2);
console.log("\nBANCO - MOSTRAR RELATORIO DO CLIENTE 2");
banco.relatorio(cliente2);
console.log("------");

<<<<<<< HEAD
//CRIAÇÃO DE OBJETOS DO TIPO GERENTE
const gerente = new Gerente();

//Gerente
console.log("\n--- TESTE GERENTE ---");

console.log("\nCLIENTE 1");
gerente.bonificar(cliente1, 3456);
console.log("\nCLIENTE 1");
gerente.reduzirSalario(cliente1, 2784);
console.log("\nCLIENTE 1");
gerente.auditar(cliente1);
console.log("------");

console.log("\nCLIENTE 2");
gerente.bonificar(cliente2, 3456);
console.log("\nCLIENTE 2");
gerente.reduzirSalario(cliente2, 2784);
console.log("\nCLIENTE 2");
gerente.auditar(cliente2);
console.log("------");

gerente.mostrarResumo(banco);
console.log("------");

//CRIAÇÃO DE OBJETOS DO TIPO CAIXA ELETRONICA
const caixaEletronico = new CaixaEletronico();

//Banco
console.log("\n--- TESTE CAIXA ELETRONICA ---");

console.log("\nCLIENTE 1");
caixaEletronico.sacar(cliente1, 2500);
console.log("\n CLIENTE 1");
caixaEletronico.depositar(cliente1, 1024);
console.log("\n CLIENTE 1");
caixaEletronico.mostrarSaldo(cliente1);
console.log("------");

console.log("\nCLIENTE 2");
caixaEletronico.sacar(cliente2, 1890);
console.log("\n CLIENTE 2");
caixaEletronico.depositar(cliente2, 3645);
console.log("\n CLIENTE 2");
caixaEletronico.mostrarSaldo(cliente2);

console.log("\n SIMULAR TRANSAÇÕES ");
caixaEletronico.simularTransaccoes(banco, cliente1, 30);
caixaEletronico.simularTransaccoes(banco, cliente2, 30);
console.log("------");
=======
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
>>>>>>> fccb20091b9808f8f009ad0a14e753fc77931212
