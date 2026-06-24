import express from 'express';
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('Servidor rodando em http://localhost:'+port);
});

import {adicao} from '../aritmeticas/adicao.js'
import { divisao } from '../aritmeticas/divisao.js';
import { multipli } from '../aritmeticas/multiplicacao.js';
import { potencia } from '../aritmeticas/potencia.js';
import { subtracao } from '../aritmeticas/subtracao.js';
import { carroEconomico } from '../ifelse/ifelse_1.js';
import { imparPar } from '../ifelse/ifelse_2.js';
import { velhoNovo } from '../ifelse/ifelse_3.js';
import { idade } from '../ifelse/ternario.js';
import { calcularImc } from '../ifelse/case.js';
import { calcularPotencia } from '../laços/dowhile.js';
import { validadorSaida } from '../laços/dowhile2.js';
import { calcularTabuada } from '../laços/for1.js';
import { calcularSalarios } from '../laços/for2.js';
import { percorrerlist } from '../laços/foreach.js';
import { vetorNovoVelho } from '../laços/map.js';
import { contarIdades } from '../laços/while1.js';
import { fazerTabuada } from '../laços/while2.js';
import { militar } from '../operadoreslogicos/e.js';
import { pesquisa } from '../operadoreslogicos/not.js';
import { aposentadoria } from '../operadoreslogicos/ou.js';
import { somatorio } from '../vetor/vetor1.js';
import { vetorSoma } from '../vetor/vetor2.js';
import { vetorBusca } from '../vetor/vetor3.js';
import { removendo } from '../vetor/vetor4.js';

console.log("--- Iniciando Soma ---") 

app.get('/soma/:n1/:n2', (req, res) => {
    
    const num1 = Number(req.params.n1);
    const num2 = Number(req.params.n2);
    const resultadoSoma = adicao(num1, num2);
    
    res.json({
        resultado: resultadoSoma,
        operacao: "soma",
        entradas: {
            numero1: num1,
            numero2: num2
        },
        status: "sucesso"
    }); 
});

console.log("--- Iniciando Divisão ---")

app.get('/divisao/:n1/:n2', (req, res) => {
    
    const num1 = Number(req.params.n1);
    const num2 = Number(req.params.n2);
    const resultadoDivisao = divisao(num1, num2);
    
    res.json({
        resultado: resultadoDivisao,
        operacao: "Divisão",
        entradas: {
            numero1: num1,
            numero2: num2
        },
        status: "sucesso"
    }); 
});

console.log("--- Iniciando Subtração ---")

app.get('/subtracao/:n1/:n2', (req, res) => {
    
    const num1 = Number(req.params.n1);
    const num2 = Number(req.params.n2);
    const resultadoSubtr = subtracao(num1, num2);
    
    res.json({
        resultado: resultadoSubtr,
        operacao: "Subtração",
        entradas: {
            numero1: num1,
            numero2: num2
        },
        status: "sucesso"
    }); 
});

console.log("--- Iniciando Potência ---")

app.get('/potencia/:n1/:n2', (req, res) => {
    
    const num1 = Number(req.params.n1);
    const num2 = Number(req.params.n2);
    const resultadoPoten = potencia(num1, num2);
    
    res.json({
        resultado: resultadoPoten,
        operacao: "Potenciação",
        entradas: {
            numero1: num1,
            numero2: num2
        },
        status: "sucesso"
    }); 
});

console.log("--- Iniciando Programa de Multiplicação ---")

app.get('/multi/:n1/:n2', (req, res) => {
    
    const num1 = Number(req.params.n1);
    const num2 = Number(req.params.n2);
    const resultadoMulti = multipli(num1, num2);
    
    res.json({
        resultado: resultadoMulti,
        operacao: "Multiplicação",
        entradas: {
            numero1: num1,
            numero2: num2
        },
        status: "sucesso"
    }); 
});

console.log("--- Iniciando Programa de Carro Econômico ---")

app.get('/carro/km/l', (req, res) => {
    
    const km = Number(req.params.n1);
    const l = Number(req.params.n2);
    const resultadoCarro = carroEconomico(km, l);
    
    res.json({
        resultado: resultadoCarro,
        operacao: "Carro Econômico",
        entradas: {
            numero1: km,
            numero2: l
        },
        status: "sucesso"
    }); 
});

console.log("--- Iniciando Programa de Impar ou Par ---")

app.get('/ipar/n', (req, res) => {
    
    const num1 = Number(req.params.n1);
    const resultadoIpar = imparPar(num1);
    
    res.json({
        resultado: resultadoIpar,
        operacao: "Impar ou Par?",
        entradas: {
            numero1: num1,
        },
        status: "sucesso"
    }); 
});

console.log("--- Iniciando Programa de Idade ---")

app.get('/idd/:n1', (req, res) => {
    
    const num1 = Number(req.params.n1);
    const resultadoIdade = idade(num1);
    
    res.json({
        resultado: resultadoIdade,
        operacao: "Idade",
        entradas: {
            numero1: num1,
        },
        status: "sucesso"
    }); 
});

console.log("--- Iniciando Calcular IMC ---")

app.get('/imc/:n1/:n2', (req, res) => {
    
    const num1 = Number(req.params.n1);
    const num2 = Number(req.params.n2);
    const resultadoIMC = calcularImc(num1, num2);
    
    res.json({
        resultado: resultadoIMC,
        operacao: "IMC",
        entradas: {
            numero1: num1,
            numero2: num2
        },
        status: "sucesso"
    }); 
});

console.log("--- Iniciando Maior ou Não de Idade ---")

app.get('/idade', async (req, res) =>{
const idd = await idade();
res.json({
    resultado: idd,
    operacao: "MaiorDeIdade?",
    status: "sucesso"
}); 
});

console.log("--- Iniciando Programa de Calcular Potência com Laço DoWhile  ---")

app.get('/dowhile/:n1/:n2', (req, res) => {
    
    const num1 = Number(req.params.n1);
    const num2 = Number(req.params.n2);
    const resultadoDoWhile1 = calcularPotencia(num1, num2);
    
    res.json({
        resultado: resultadoDoWhile1,
        operacao: "CalcularPotencia",
        entradas: {
            numero1: num1,
            numero2: num2
        },
        status: "sucesso"
    }); 
});

console.log("--- Iniciando Programa de Tabuada com for  ---")

app.get('/forbuada/:n1', (req, res) => {
    
    const num1 = Number(req.params.n1);
    const resultadoForbuada = calcularTabuada(num1);
    
    res.json({
        resultado: resultadoForbuada,
        operacao: "Multiplicação",
        entradas: {
            numero1: num1,
        },
        status: "sucesso"
    }); 
});

/*console.log("--- Iniciando Programa de Salario  ---")

app.get('/salari', async (req, res) =>{
const salari = await calcularSalarios();
res.json({
    resultado: salari,
    operacao: "CalcularSalário",
    status: "sucesso"
}); 
}); 

console.log("--- Iniciando Programa de Percorrer vetor  ---")

app.get('/listinha', async (req, res) =>{
const listinha = percorrerlist();
res.json({
    resultado: listinha,
    operacao: "percorrerLista",
    status: "sucesso"
}); 
});

console.log("--- Iniciando Programa de Vetor novo e Velho  ---")

app.get('/mapa', async (req, res) =>{
const mapa = vetorNovoVelho();
res.json({
    resultado: mapa,
    operacao: "vetorNovoVelho",
    status: "sucesso"
}); 
});

*/

/*console.log("--- Iniciando Programa de Idade Laço While  ---")

app.get('/maioral', async (req, res) =>{
const maioral = await contarIdades();
res.json({
        resultado: maioral,
        operacao: "contarIdades",
        status: "sucesso"
    }); 
});

console.log("--- Iniciando Programa de Tabuada com Laço While  ---")

app.get('/whileuada', async (req, res) =>{
const whileuada = await fazerTabuada();
res.json({
    resultado: whileuada,
    operacao: "fazerTabuada",
    status: "sucesso"
}); 
});

console.log("--- Iniciando Programa de Alistamento Militar  ---")

app.get('/alistamento', async (req, res) =>{
const alistamento = await militar();
res.json({
    resultado: alistamento,
    operacao: "militar",
    status: "sucesso"
}); 
});

console.log("--- Iniciando Programa de Pesquisa  ---")

app.get('/nao', async (req, res) =>{
const nao = await pesquisa();
res.json({
    resultado: nao,
    operacao: "pesquisa",
    status: "sucesso"
}); 
});

console.log("--- Iniciando Programa de Aposentadoria  ---")

app.get('/aposentar', async (req, res) =>{
const aposentar = await aposentadoria();
res.json({
    resultado: aposentar,
    operacao: "aposentadoria",
    status: "sucesso"
}); 
});

console.log("--- Iniciando Programa de Somatorio  ---")

app.get('/somacao', async (req, res) =>{
const somacao = await somatorio();
res.json({
    resultado: somacao,
    operacao: "somatorio",
    status: "sucesso"
}); 
});

console.log("--- Iniciando Programa Vetor de Soma  ---")

app.get('/somandovetor', async (req, res) =>{
const somandovetor = await vetorSoma();
res.json({
    resultado: somandovetor,
    operacao: "vetorsoma",
    status: "sucesso"
}); 
});

console.log("--- Iniciando Programa de Busca no Vetor  ---")

app.get('/buscando', async (req, res) =>{
const buscando = await vetorBusca();
res.json({
    resultado: buscando,
    operacao: "vetorbusca",
    status: "sucesso"
}); 
});

console.log("--- Iniciando Programa de Remoção  ---")

app.get('/removedor', async (req, res) =>{
const removedor = await removendo();
res.json({
    resultado: removedor,
    operacao: "removendo",
    status: "sucesso"
}); 
}); */

console.log("--- Fim do Programa ---")
