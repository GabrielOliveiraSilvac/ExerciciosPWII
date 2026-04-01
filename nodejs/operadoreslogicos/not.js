import readline from 'node:readline/promises'; 
import { stdin as input, stdout as output } from 'node:process';

// Função Assíncrona
async function pesquisa() {
    const rl = readline.createInterface({ input, output });

    //Declaração de Variaveis
    let n;

    // Leitura de dados
    let p = String(await rl.question("Quer Participar de uma Pesquisa?: "));

    rl.close();

    // Tomada de Descisão
    if (p !== 'sim') {
        return("Error 404")
    }   else  {
    return("Ok, Obrigado pelo Seu feedback")
    }

}
export{pesquisa};