// Importando Scanner
import readline from 'node:readline/promises'; 
import { stdin as input, stdout as output } from 'node:process';

// Função Assíncrona
async function calcularImc() {
    const rl = readline.createInterface({ input, output });

// Leitura dos Dados (Syso)
    const p = Number(await rl.question("Seu Peso: "));
    let h = Number(await rl.question("Sua Altura em metros: "));

    h = h * h;
    let imc = p / h;
    
    rl.close();

// Switch Case
    switch (true) {
        case imc < 18.5: 
        return("Excesso de Magreza!")
        break;

        case imc < 25:
        return("Peso Normal!")
        break;

        case imc <  30:
        return("Excesso de Peso!")
        break;

        case imc < 35:
        return("Obesidade Grau I")
        break;

        case imc < 40:
        return("Obesidade Grau II")
        break;

        case imc > 40:
        return("Obesidade Grau III")
        break;
    }   
   
}

export {calcularImc};