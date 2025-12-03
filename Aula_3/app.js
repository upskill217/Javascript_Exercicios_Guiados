function somarValoresAltos(lista) {
    let total = 0;
    let limite = 50;

    // >>> 1. RECOMENDAÇÃO: Põe um Breakpoint nesta linha do 'for' <<<
    for (let i = 0; i < lista.length; i++) {
        
        let valorAtual = lista[i];

        // Debug: Repara como o 'valorAtual' muda a cada volta do loop
        
        // >>> 2. RECOMENDAÇÃO: Põe um Breakpoint na linha do 'if' <<<
        if (valorAtual > limite) {
            // Repara: O código só entra aqui SE a condição for verdadeira
            console.log("Encontrei um valor alto: " + valorAtual);
            
            total = total + valorAtual; 
            // Vê a variável 'total' a acumular valor
        }
    }

    return total;
}


// --- DADOS DE TESTE ---
let numeros = [10, 60, 45, 100, 5]; 
// Valores esperados: 10 (ignora), 60 (soma), 45 (ignora), 100 (soma), 5 (ignora).
// Resultado esperado: 160.


// Chamada da função
let resultadoFinal = somarValoresAltos(numeros);

console.log("O resultado final é: " + resultadoFinal);