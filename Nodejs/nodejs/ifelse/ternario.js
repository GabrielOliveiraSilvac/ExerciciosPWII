import readline from 'node:readline/promises'; 
import { stdin as input, stdout as output } from 'node:process';

// Função Assíncrona
async function idade() {
    const rl = readline.createInterface({ input, output });

// Leitura de dados
    let n = Number(await rl.question("Digite aqui seu numero: "));

    rl.close();
    
    // Tomada de Descisão
    const m = n <= 18 ? "Você é de menor" : "Você esta velho"
    return(m)
}

export {idade};