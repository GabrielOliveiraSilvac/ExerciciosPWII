import readline from 'node:readline/promises'; 
import { stdin as input, stdout as output } from 'node:process';


// Isso aqui TEM que existir pro js não travar
async function contarIdades() {
    const rl = readline.createInterface({ input, output });

    // Declaração de Váriaveis
    let i = 0;
    let maior = 0;
    let menor = 0;
    let idade;

    // Laço While
    while (i < 5) {
        console.log(`\n--- Pessoa ${i + 1} ---`);
        
        // Famoso Syso
        let nasc = Number(await rl.question("Ano de Nascimento: "));
        let ano = Number(await rl.question("Ano Atual: "));

        idade = ano - nasc;


        if (idade >= 18) {
            maior++;
            console.log("Você é MAIOR de idade.");
        } else {
            menor++;
            console.log("Você é MENOR de idade.");
        }

        i++; 
    }
    rl.close();

    // Apresentação pro Usuário
    let resposta = ("São " +(maior) + " Maiores de Idade informados!" +'<br>')
    resposta +=((menor) + " são Menores de Idade!")

    return resposta;

}

export{contarIdades};