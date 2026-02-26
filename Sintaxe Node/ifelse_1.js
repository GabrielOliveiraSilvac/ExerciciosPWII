// Seção Um - Carro Econômico

// Criação do Scanner
const readline = require('node:readline/promises');
const { stdin: input, stdout: output} = require("node:process");

// Declaração de Váriaveis
    let litros, km, gasto;

// Função Assíncrona
async function carroEconomico() {
    const rl = readline.createInterface({ input, output });

// Leitura dos Dados
    litros = Number(await rl.question("Digite aqui em LITROS a capacidade do tanque: "));
    km = Number(await rl.question("Digite aqui a distância percorrida em Quilometros: "));

    gasto = km / litros;
    
    // Tomada de Descisão
    if (gasto >= 10) {
        console.log("Seu Carro é ECONÔMICO!")
    } else {
        console.log("Seu Carro NÃO é ECONÔMICO!!")
    }
    rl.close();
}
carroEconomico();