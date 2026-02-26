// Seção Cinco - Potencia

// Criação do Scanner
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Declaração de Variaveis
let b;

// Leitura dos Dados
    rl.question("Digite aqui o primeiro múltiplo: ", (resposta) => {
        b = Number(resposta);

        //Apresentação
        console.log("A Potencia do Numero é: " +b*b)

        rl.close();
    })