import readline from 'node:readline/promises'; 
import { stdin as input, stdout as output } from 'node:process';

// Isso aqui TEM que existir pro js não travar
async function calcularTabuada() {
    const rl = readline.createInterface({ input, output });

    // Leitura dos dados (Syso)
    const n = Number(await rl.question("Número: "));

    rl.close();

    console.log("--- Nº Escolhido " +(n)+ " ---")
    // Laço
    for (let i = 1; i <= 10; i++) {
        return(i+ " X " +n+ " = " +(i*n))
    }
    
}

export {calcularTabuada};