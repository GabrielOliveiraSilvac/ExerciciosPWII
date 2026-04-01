import readline from 'node:readline/promises'; 
import { stdin as input, stdout as output } from 'node:process';

// Função
async function divisao() {
    const rl = readline.createInterface({ input, output });

    // Adicionado 'await' para o código REALMENTE esperar o usuário digitar
    const n1 = Number(await rl.question("Digite o valor Dividendo: "));
    const n2 = Number(await rl.question("Digite o valor do Divisor: "));

    rl.close();

    return "Resultado: " + (n1 / n2);
}

export { divisao };