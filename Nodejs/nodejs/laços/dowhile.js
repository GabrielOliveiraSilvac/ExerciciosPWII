import readline from 'node:readline/promises'; 
import { stdin as input, stdout as output } from 'node:process';

// Isso aqui TEM que existir pro js não travar
async function calcularPotencia() {
    const rl = readline.createInterface({ input, output });

    // Declarando variáveis
    let i = 1, c = 1;

    // Leitura dos dados (Syso)
    let n = Number(await rl.question("Digite a base: "));
    let e = Number(await rl.question("Digite o expoente: "));

    rl.close();

    console.log("--- Calculando " +(n)+ " elevado a " +(e)+ " ---");

    // Laço do while
    do {
        c = c * n; 
        return("Seu Numero em Potencia: " + c);
        i++;
    } while (i <= e);

}

export {calcularPotencia};