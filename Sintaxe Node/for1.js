// Seção Um - For

// Importando Scanner
const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

// Declarando Váriaveis
let n;

// Isso aqui TEM que existir pro js não travar
async function calcularTabuada() {
    const rl = readline.createInterface({ input, output });

    // Leitura dos dados (Syso)
    n = Number(await rl.question("Número: "));

    console.log("--- Nº Escolhido " +(n)+ " ---")
    // Laço
    for (let i = 1; i <= 10; i++) {
        console.log(i+ " X " +n+ " = " +(i*n))
    }
    rl.close();
};
calcularTabuada();