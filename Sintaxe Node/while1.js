// Seção Um - While

// Scanner de um jeito mais "moderno"
const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');


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
        const nasc = Number(await rl.question("Ano de Nascimento: "));
        const ano = Number(await rl.question("Ano Atual: "));

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

    // Apresentação pro Usuário
    console.log("São " +(maior) + " Maiores de Idade informados!")
    console.log((menor) + " são Menores de Idade!")


    rl.close();
}

contarIdades();