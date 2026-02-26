// Seção Quatro - Divisão!

// Criação do Scanner
const readline = require('readline');
const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

    // Declaração de Váriaveis
    let n1, n2, n3, n4;

    // Leitura dos Dados
rl.question("Digite aqui a Primeira Nota: ", (resposta) => {
    n1 = Number(resposta);

    rl.question("Digite aqui a Segunda Nota: ", (resposta) => {
        n2 = Number(resposta);

            rl.question("Digite aqui a Terceira Nota: ", (resposta) => {
                n3 = Number(resposta);

                rl.question("Digite aqui a Quarta Nota: ", (resposta) => {
                    n4 = Number(resposta);

                // Apresentação
                console.log("A Média das notas é: " +((n1 + n2 + n3 + n4 ) / 4));

            rl.close();
            });
         });
    }); 
});