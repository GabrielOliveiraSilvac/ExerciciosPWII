// Seção Um - Ternario

// Criação do Scanner
const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

// Declaração de Váriaveis
    let n;

// Função Assíncrona
async function idade() {
    const rl = readline.createInterface({ input, output });

// Leitura de dados
    n = Number(await rl.question("Digite aqui seu numero: "));

    // Tomada de Descisão
    let m = n <= 18 ? "Você é de menor" : "Você esta velho"
    console.log(m)
    rl.close();
}

idade();