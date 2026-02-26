// Seção Um - Switch Case

// Importando Scanner
const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

// Declarando Váriaveis
let h, imc, p;

// Função Assíncrona
async function calcularImc() {
    const rl = readline.createInterface({ input, output });

// Leitura dos Dados (Syso)
    console.log(" --- Vamos Descobrir o seu IMC? ---");
    p = Number(await rl.question("Seu Peso: "));
    h = Number(await rl.question("Sua Altura em metros: "));

    h = h * h;
    imc = p / h;

// Switch Case
    switch (true) {
        case imc < 18.5: 
        console.log("Excesso de Magreza!")
        break;

        case imc < 25:
        console.log("Peso Normal!")
        break;

        case imc <  30:
        console.log("Excesso de Peso!")
        break;

        case imc < 35:
        console.log("Obesidade Grau I")
        break;

        case imc < 40:
        console.log("Obesidade Grau II")
        break;

        case imc > 40:
        console.log("Obesidade Grau III")
        break;
    }   
    rl.close();
}

calcularImc();