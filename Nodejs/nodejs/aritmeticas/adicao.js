import readline from 'node:readline/promises'; 
import { stdin as input, stdout as output } from 'node:process';

// Função
async function adicao() {
    const rl = readline.createInterface({ input, output });

    // Adicionado 'await' para o código REALMENTE esperar o usuário digitar
    const n1 = Number(await rl.question("Primeiro número: "));
    const n2 = Number(await rl.question("Segundo número: "));

    rl.close();

    return "O Valor da Soma é: " + (n1 + n2);
}

export { adicao };