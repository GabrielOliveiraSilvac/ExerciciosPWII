// Seção Dois - Do While 

// Importando Scanner
const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

// Isso aqui TEM que existir pro js não travar
async function validadorSaida() {
    const rl = readline.createInterface({ input, output });

    // Declarando Váriaveis
    let resposta;

    // Laço Do...While
    do {
        // System.out.println (Vulgo Syso)
        resposta = await rl.question("Deseja fechar o programa? (S/N): ");
        
        // Isso aqui a IA que disse pra fazer, ai vai aceitar 's' ou 'S'
        resposta = resposta.toUpperCase();

        if (resposta !== "S") {
            console.log("Opção inválida! Você continua preso aqui.");
        }

    } while (resposta !== "S");

    console.log("Finalmente! Saindo do programa...");
    rl.close();
}

validadorSaida();