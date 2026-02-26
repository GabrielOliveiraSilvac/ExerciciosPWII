// Seção Dois if else - Impar ou Par?
// Seção Seis Aritmeticas - Resto da Divisão

// Criação do Scanner
const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

// Declaração de Váriaveis
    let n;

// Função Assíncrona
async function imparPar() {
    const rl = readline.createInterface({ input, output });

// Leitura de dados
    n = Number(await rl.question("Digite aqui seu numero: "));

    // Tomada de Descisão
    if (n % 2 == 0) {
        console.log("Seu número é PAR!!")
    }   else {
    console.log("Seu número é IMPAR!!")
    }

    rl.close();
}

imparPar();