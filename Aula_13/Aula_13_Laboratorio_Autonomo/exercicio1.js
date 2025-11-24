
/* Exercício 1 — Sistema Bancário Complexo */
console.log("Exercício 1 — Sistema Bancário Complexo");

//classe/objeto Conta
const conta = {
  saldo: 0,
  depositar(valor) {
    //adiciona valor ao saldo; mostrar saldo.
    this.saldo += valor;
    this.mostrarSaldo();
  },
  levantar(valor) {
    //subtrai valor do saldo se houver saldo; mostrar saldo.
    if (this.saldo >= valor) {
      this.saldo -= valor;
      this.mostrarSaldo();
    }
  },
  aplicarJuros(taxa, anos) {
    //ciclo for para aplicar juros ano a ano; mostrar saldo em cada ano.
    //let saldoAtual = this.saldo;
    for (let i = 1; i <= anos; i++) {
      this.saldo *= i + taxa;
      console.log(`Ano: ${i} - Saldo: ${this.saldo.toFixed(2)}`);
    }
  },
  mostrarSaldo() {
    //→ imprime saldo atual.
    console.log(`Saldo Atual: ${this.saldo.toFixed(2)}\n`);
  },
};

//classe/objeto Cliente
const cliente = {
  identificador: "Cliente 1",
  contaAtual: conta,
  transferir(valor, outraConta) {
    //retira de sua conta e adiciona à outra.
    this.contaAtual.levantar(valor);
    outraConta.depositar(valor);
  },
  mostrarSaldo() {
    //mostra saldo da conta.
    console.log(`--- Saldo de ${this.identificador} ---`);
    this.contaAtual.mostrarSaldo();
  },
  aniversario(anos, bonus) {
    //bônus de saldo anual; use ciclo for para anos passados.
    for (let i = 1; i <= anos; i++) {
      let valorBonusAnual = this.contaAtual.saldo * bonus;
      this.contaAtual.saldo += valorBonusAnual;
    }
  },
  presentear(valor, outroCliente) {
    //transfere valor a outro cliente.
    outroCliente.depositar(valor);
  },
};



//classe/objeto Banco
const banco = {
  saldoBancoTotal: 1000000,
  jurosDiario: 0.01,
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
        cliente.contaAtual.levantar(valor);
        this.saldoBancoTotal += valor * this.jurosDiario;
      } else {
        //deposita e paga juros diario
        console.log(`Dia ${i} - Depositar ${valor.toFixed(2)}`);
        let valorJuros = valor * this.jurosDiario;
        valor += valorJuros;
        console.log(
          `Com juros diario de ${this.jurosDiario} fica ${valor.toFixed(2)}`
        );
        cliente.contaAtual.depositar(valor);
        this.saldoBancoTotal += valor * this.jurosDiario;
      }
    }
    this.resumoTotal();
  },
  relatorio(cliente) {
    //imprime saldo de todos os clientes.
   console.log(`Saldo de ${cliente.identificador}: ${cliente.mostrarSaldo()}`);
  },
  aplicarTaxaDia(taxa, cliente) {
    //aplica taxa diária a todas contas
    //  cliente;
  },
  resumoTotal() {
    console.log(`Saldo total do Banco: ${this.saldoBancoTotal.toFixed(2)}.`);
  },
};

//classe/objeto Gerente
const gerente = {
  auditar(cliente) {
    // imprime histórico e saldo da conta.
    console.log(`--- Histórico de ${cliente.identificador} ---`);
    cliente.mostrarSaldo();
  },
  bonificar(cliente, valor) {
    // adiciona bônus ao saldo do cliente.
    console.log(`Bonificar ${cliente.identificador} com valor de ${valor}`);
    cliente.contaAtual.depositar(valor);
    cliente.mostrarSaldo();
  },
  reduzirSalario(cliente, valor) {
    // subtrai valor com segurança.
    console.log(`Reduzir o salario do ${cliente.identificador} com valor de ${valor}`);
    cliente.contaAtual.levantar(valor);
  },
  mostrarResumo(banco) {
    // mostra resumo do banco e clientes
    banco.resumoTotal();
  },
};

//classe/objeto CaixaEletronico
const caixaEletronico = {
  sacar(cliente, valor) {
    cliente.contaAtual.levantar(valor);
  },
  depositar(cliente, valor) {
    cliente.contaAtual.depositar(valor);
  },
  mostrarSaldo(cliente) {
    cliente.mostrarSaldo();
  },
  simularTransaccoes(banco, cliente, dias) {
    //  simular transações diárias.
    banco.simularDia(cliente, dias);
  },
};

console.log("\n--- CLIENTE ---");
console.log("Deposito de 100 EUR...");
cliente.contaAtual.depositar(100);
console.log("Saque de 50 EUR...");
cliente.contaAtual.levantar(50);
console.log("Aplicar 3% de juros por 5 anos...");
cliente.contaAtual.aplicarJuros(0.03, 5);
cliente.contaAtual.mostrarSaldo();
console.log("Bonus de 5% por cada aniversario...")
cliente.aniversario(5, 0.05);
cliente.mostrarSaldo();

console.log("-- GERENTE ---"); 
gerente.auditar(cliente);
gerente.bonificar(cliente, 100);
gerente.reduzirSalario(cliente, 50);
console.log("\n--- MOSTRAR RESUMO ---");
gerente.mostrarResumo(banco);

console.log("\n--- CAIXA ELETRONICO - SIMULANDO 30 DIAS ---");
caixaEletronico.simularTransaccoes(banco,cliente, 30);

