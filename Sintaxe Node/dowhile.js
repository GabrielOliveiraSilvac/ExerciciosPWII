// Seção Um - Do While 

// Importando Scanner
const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

// Isso aqui TEM que existir pro js não travar
async function calcularPotencia() {
    const rl = readline.createInterface({ input, output });

    // Declarando variáveis
    let i = 1, n, e, c = 1;

    // Leitura dos dados (Syso)
    n = Number(await rl.question("Digite a base: "));
    e = Number(await rl.question("Digite o expoente: "));

    console.log("--- Calculando " +(n)+ " elevado a " +(e)+ " ---");

    // Laço do while
    do {
        c = c * n; 
        console.log("Seu Numero em Potencia: " + c);
        i++;
    } while (i <= e);

    rl.close();
}

calcularPotencia();