//Seção Dois - Utilizando Ou

// Criação do Scanner
const readline = require('node:readline/promises');
const { stdin: input, stdout: output} = require("node:process");

//Declaração de Variaveis
    let contribuicao, idade;

// Função Assíncrona
async function aposentadoria() {
    const rl = readline.createInterface({ input, output });

    // Leitura de dados
    contribuicao = Number(await rl.question("Digite aqui sua idade de Contribuição: "));
    idade = Number(await rl.question("Digite aqui sua idade: "));

    // Tomada de Descisão
    if (contribuicao >=30 || idade >=65) {
        console.log("Pode se Aposentar")
    }   else {
    console.log("Você não pode se Aposentar")
    }

    rl.close();
}
aposentadoria();