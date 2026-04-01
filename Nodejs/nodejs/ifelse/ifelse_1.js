import readline from 'node:readline/promises'; 
import { stdin as input, stdout as output } from 'node:process';

// Função
async function carroEconomico() {
    const rl = readline.createInterface({ input, output });

    // Adicionado 'await' para o código REALMENTE esperar o usuário digitar
    const l = Number(await rl.question("Digite aqui em LITROS a capacidade do tanque: "));
    const km = Number(await rl.question("Digite aqui a distância percorrida em Quilometros: "));

    const gasto = km / l;
    
    rl.close();

    if (gasto >= 10) {
        return("Seu Carro é ECONÔMICO!")
    } else {
        return("Seu Carro NÃO é ECONÔMICO!!")
    }
}

export { carroEconomico };