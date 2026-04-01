import readline from 'node:readline/promises'; 
import { stdin as input, stdout as output } from 'node:process';
// Função Assíncrona
async function aposentadoria() {
    const rl = readline.createInterface({ input, output });

    //Declaração de Variaveis
    let contribuicao, idade;

    // Leitura de dados
    contribuicao = Number(await rl.question("Digite aqui sua idade de Contribuição: "));
    idade = Number(await rl.question("Digite aqui sua idade: "));

    rl.close();

    // Tomada de Descisão
    if (contribuicao >=30 || idade >=65) {
        return("Pode se Aposentar")
    }   else {
    return("Você não pode se Aposentar")
    }

}
export{aposentadoria};