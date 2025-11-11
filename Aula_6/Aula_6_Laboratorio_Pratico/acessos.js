//Desafio 3: Verificação de Acesso a Evento (if/else)
console.log("\nDesafio 3: Verificação de Acesso a Evento (if/else)")

//Teste com idade = 15
let idade = 15;
console.log(`\nIdade: ${idade}`)

if (idade >= 18) {
  console.log("Acesso permitido");
} else if (idade >= 16 && idade < 18) {
  console.log("Acesso com acompanhante")
} else {
  console.log("Acesso proibido")
}

//Teste com idade = 16
idade = 16;
console.log(`\nIdade: ${idade}`)

if (idade >= 18) {
  console.log("Acesso permitido");
} else if (idade >= 16 && idade < 18) {
  console.log("Acesso com acompanhante")
} else {
  console.log("Acesso proibido")
}

//Teste com idade = 18
idade = 18;
console.log(`\nIdade: ${idade}`)

if (idade >= 18) {
  console.log("Acesso permitido");
} else if (idade >= 16 && idade < 18) {
  console.log("Acesso com acompanhante")
} else {
  console.log("Acesso proibido")
}




