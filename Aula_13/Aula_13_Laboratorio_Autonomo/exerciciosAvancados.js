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
    console.log(`Saldo Atual: ${this.saldo.toFixed(2)}`);
  },
};
conta.depositar(100);
conta.levantar(50);
conta.aplicarJuros(0.03, 5);
conta.mostrarSaldo();
console.log("\n");

//classe/objeto Cliente
const cliente = {
  contaAtual: conta,
  transferir(valor, outraConta) {
    //retira de sua conta e adiciona à outra.
    this.contaAtual.levantar(valor);
    outraConta.depositar(valor);
  },
  mostrarSaldo() {
    //mostra saldo da conta.
    this.contaAtual.mostrarSaldo();
  },
  aniversario() {
    //bônus de saldo anual; use ciclo for para anos passados.
  },
  presentear(valor, outroCliente) {
    //transfere valor a outro cliente.
    outroCliente.depositar(valor);
  },
};
cliente.contaAtual.depositar(100);
cliente.contaAtual.levantar(50);
console.log("\n");

//classe/objeto Banco
const banco = {
  saldoTotal: 0,
  simularDia(cliente, dia) {
    //aplica juros diários em cada cliente usando ciclo.
  },
  relatorio(cliente) {
    //imprime saldo de todos os clientes.
  },
  aplicarTaxaDia(taxa) {
    //aplica taxa diária a todas contas
  },
  resumoTotal(){
    console.log(`Saldo total do Banco: ${this.saldoTotal.toFixed(2)}.`)
  }
};

//classe/objeto Gerente
const gerente = {};

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
  simularTransaccoes(cliente, dias) {
    for (let i = 1; i <= dias; i++) {
      let valor = Math.floor(Math.random() * 1000);
      if (Math.random() < 0.5) {
        //sacar
        console.log(`Dia ${i} - Sacar ${valor.toFixed(2)}`);
        this.sacar(cliente, valor);
      } else {
        //depositar
        console.log(`Dia ${i} - Depositar ${valor.toFixed(2)}`);
        this.depositar(cliente, valor);
      }
    }
  },
};

caixaEletronico.simularTransaccoes(cliente, 30);

/* Exercício 2 — Escola e Provas */
console.log("\nExercício 2 — Escola e Provas");

/* Exercício 3 — Corrida Automobilística */
console.log("\nExercício 3 — Corrida Automobilística");
