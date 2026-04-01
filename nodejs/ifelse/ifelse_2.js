import readline from 'node:readline/promises'; 
import { stdin as input, stdout as output } from 'node:process';

// Função
async function imparPar() {
    const rl = readline.createInterface({ input, output });

    // Adicionado 'await' para o código REALMENTE esperar o usuário digitar
    const n = Number(await rl.question("Digite aqui o seu número: "));
    
    rl.close();
    
    if (n % 2 == 0) {
        return("Seu número é PAR!!")
    }   else {
        return("Seu número é IMPAR!!")
    }
    
    
}

export { imparPar };