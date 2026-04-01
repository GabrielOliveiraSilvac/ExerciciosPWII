import readline from 'node:readline/promises'; 
import { stdin as input, stdout as output } from 'node:process';

// Função
async function velhoNovo() {
    const rl = readline.createInterface({ input, output });

    // Adicionado 'await' para o código REALMENTE esperar o usuário digitar
    const anoatual = Number(await rl.question("Digite o ano Atual: "))
    const nascimento = Number(await rl.question("Digite Seu ano de Nascimento: "))

     const idade = anoatual - nascimento;
        
	 if (idade < 10) {
		return("Você é uma criança: " +idade+ " Anos de Idade");
		}

	else if (idade < 18) {
		return("Você é adolescente: " +idade+ " Anos de Idade");
		}

	else if (idade < 60) {
		return("Você é Adulto: " +idade+ " Anos de Idade");
		}

	else {
		return("Você é Velho: " +idade+ " Anos de Idade");
		}

}

export { velhoNovo };