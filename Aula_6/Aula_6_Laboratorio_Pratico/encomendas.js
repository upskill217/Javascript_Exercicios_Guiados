//Desafio 2: Despacho de Encomendas (switch)
console.log("\nDesafio 2: Despacho de Encomendas (switch)")

const codigoEstado = "PT";

switch (codigoEstado) {
  case "PT":
    console.log("Despacho Nacional. Entrega 1 dia.")
    break;
  case "ES":
    console.log("Despacho Ibérico. entrega 2 dias.")
    break;
  case "FR":
    console.log("Despacho Europeu. Entrega 3-5 dias.")
    break;
  default:
    console.log("Código de destino inválido.")
}

