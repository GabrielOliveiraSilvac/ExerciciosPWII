import readline from 'node:readline/promises'; 
import { stdin as input, stdout as output } from 'node:process';

// Função
async function multipli() {
    const rl = readline.createInterface({ input, output });

    // Adicionado 'await' para o código REALMENTE esperar o usuário digitar
    const n1 = Number(await rl.question("Primeiro número: "));
    const n2 = Number(await rl.question("Segundo número: "));

    rl.close();

    return "Os valores multiplicados: " + (n1 * n2);
}

export { multipli };