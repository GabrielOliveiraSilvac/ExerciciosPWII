// Seção Dois - Tabuada do Número 

// Importando Scanner
const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

// Isso aqui TEM que existir pro js não travar
async function fazerTabuada() {
    const rl = readline.createInterface({ input, output });

// Declarando Váriaveis
    let i = 1;

// Leitura do N (Syso)
const n = Number(await rl.question("Número: "));
console.log("--- Nº Escolhido " +(n)+ " ---")

// Laço While
    while(i <= 10) {
        console.log(n +" X "+ i +" = " +(n*i))
        i++
    }

    rl.close();
}; 

fazerTabuada();