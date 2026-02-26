//Seção Um - Utilizando e

// Criação do Scanner
const readline = require('node:readline/promises');
const { stdin: input, stdout: output} = require("node:process");

//Declaração de Variaveis
    let n, s;

// Função Assíncrona
async function militar() {
    const rl = readline.createInterface({ input, output });

    // Leitura de dados
    n = Number(await rl.question("Digite aqui sua idade: "));
    s = String(await rl.question("Digite aqui seu sexo: "));

    // Tomada de Descisão
    if (n>=18 && s =='m') {
        console.log("Deve se Alistar")
    }   else {
    console.log("Você não precisa se Alistar")
    }

    rl.close();
}
militar();