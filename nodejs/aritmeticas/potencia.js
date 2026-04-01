import readline from 'node:readline/promises'; 
import { stdin as input, stdout as output } from 'node:process';

// Função
async function potencia() {
    const rl=  readline.createInterface({ input, output });

    // Adicionado 'await' para o código REALMENTE esperar o usuário digitar
    const n1 = Number(await rl.question("Primeiro número: "));

    rl.close();

    return "O Valor digitado em potência: " + (n1 * n1);
}

export { potencia };