// Seção Três - Idade

// Criação do Scanner
const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

// Declaração de Váriaveis
let anoatual, nascimento, idade;

// Função Assíncrona
async function VelhoNovo() {
    const rl = readline.createInterface({ input, output });
    
// leitura de Dados
    anoatual = Number(await rl.question("Digite o ano Atual: "))
    nascimento = Number(await rl.question("Digite Seu ano de Nascimento: "))

    idade = anoatual - nascimento;
        if (idade<10) {
			console.log("Você é uma criança: " +idade+ " Anos de Idade");
		}
		else if (idade<18) {
			console.log("Você é adolescente: " +idade+ " Anos de Idade");
		}
		else if (idade<60) {
			console.log("Você é Adulto: " +idade+ " Anos de Idade");
		}
		else {
			console.log("Você é Velho: " +idade+ " Anos de Idade");
		}

        rl.close
}

VelhoNovo();