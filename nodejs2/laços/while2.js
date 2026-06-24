import readline from 'node:readline/promises'; 
import { stdin as input, stdout as output } from 'node:process';

// Isso aqui TEM que existir pro js não travar
async function fazerTabuada() {
    const rl = readline.createInterface({ input, output });

// Declarando Váriaveis
    let i = 1;
    let resposta = ("")

// Leitura do N (Syso)
const n = Number(await rl.question("Número: "));

rl.close();

console.log("--- Nº Escolhido " +(n)+ " ---")

// Laço While
    while(i <= 10) {
        resposta += (n + " X " + i + " = " +(n*i)+ '<br>')
        i++
    }
    return resposta;

}

export {fazerTabuada};