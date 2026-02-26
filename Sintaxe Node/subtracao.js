// Seção Dois - Subtração!

// Criação do Scanner
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

    // Declaração de Váriaveis
    let n1, n2;

    // Leitura dos Dados
rl.question("Digite aqui o primeiro número: ", (resposta) => {
    n1 = Number(resposta);

    rl.question("Digite aqui o segundo número: ", (resposta) => {
        n2 = Number(resposta);

                // Apresentação
                console.log("A Subtração dos números são: " +(n1 - n2));

            rl.close();
            });
         });