import readline from 'node:readline/promises'; 
import { stdin as input, stdout as output } from 'node:process';

// Isso aqui TEM que existir pro js não travar
async function calcularSalarios() {
    const rl = readline.createInterface({ input, output });

// Declarando Váriaveis
let soma = 0, j, salario, mais_alto = 0;


// Laço Leitura
    for (let i = 0; i < 5; i++) {
        salario = Number(await rl.question("Digite o Salário do Funcionário Nº " +(i+1)+ ": "));
        soma = soma + salario;
        if (salario > mais_alto) {
            j = i+1;
            mais_alto = salario;
        }
    }

    rl.close();

    let resposta = ("A Soma dos Salários dos Funcionários é de: R$ " +(soma) + "<br>")
    resposta +=("A Média dos Salários é de: R$ " +(soma / 5) + "<br>")
    resposta +=("O Funcionário que recebe o Salário mais alto é o Nº " +(j) + "<br>")
    resposta +=("Este recebe: R$ " +(mais_alto) + "<br>")

    return resposta;

};

export {calcularSalarios};