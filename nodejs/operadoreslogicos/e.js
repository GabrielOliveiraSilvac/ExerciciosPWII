import readline from 'node:readline/promises'; 
import { stdin as input, stdout as output } from 'node:process';


// Função Assíncrona
async function militar() {
    const rl = readline.createInterface({ input, output });

    //Declaração de Variaveis
    let n, s;

    // Leitura de dados
    n = Number(await rl.question("Digite aqui sua idade: "));
    s = String(await rl.question("Digite aqui seu sexo: "));

    rl.close();

    // Tomada de Descisão
    if (n>=18 && s =='m') {
        return("Deve se Alistar")
    }   else {
    return("Você não precisa se Alistar")
    }

}

export{militar};