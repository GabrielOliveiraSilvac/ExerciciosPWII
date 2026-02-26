//Seção Três - Utilizando Not

// Criação do Scanner
const readline = require('node:readline/promises');
const { stdin: input, stdout: output} = require("node:process");

//Declaração de Variaveis
    let n;

// Função Assíncrona
async function pesquisa() {
    const rl = readline.createInterface({ input, output });

    // Leitura de dados
    p = String(await rl.question("Quer Participar de uma Pesquisa?: "));
    // Tomada de Descisão
    if (p !== 'sim') {
        console.log("Error 404")
    }   else  {
    console.log("Ok, Obrigado pelo Seu feedback")
    }

    rl.close();
}
pesquisa();