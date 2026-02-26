// Seção 2 - FOR

// Importando Scanner
const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

// Declarando Váriaveis
let soma = 0, j, salario, mais_alto = 0;

// Isso aqui TEM que existir pro js não travar
async function calcularSalarios() {
    const rl = readline.createInterface({ input, output });

// Laço Leitura
    for (let i = 0; i < 5; i++) {
        salario = Number(await rl.question("Digite o Salário do Funcionário Nº " +(i+1)+ ": "));
        soma = soma + salario;
        if (salario > mais_alto) {
            j = i+1;
            mais_alto = salario;
        }
    }

    console.log("A Soma dos Salários dos Funcionários é de: R$" +(soma))
    console.log("A Média dos Salários é de: R$" +(soma / 5))
    console.log("O Funcionário que recebe o Salário mais alto é o Nº" +(j))
    console.log("Este recebe: R$" +(mais_alto))


  rl.close();  
};
calcularSalarios();