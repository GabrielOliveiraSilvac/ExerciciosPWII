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

app.get('/soma', async (req, res) => {
    const soma = await adicao(); 
    res.json({
        resultado: soma,
        operacao: "adição",
        status: "sucesso"
    }); 
});

console.log("--- Iniciando Multiplicação ---")

app.get('/multi', async (req, res) => {
    const multi = await multipli();
    res.json({
        resultado: multi,
        operacao: "multiplicação",
        status: "sucesso"
    }); 
});

console.log("--- Iniciando Divisão ---")

app.get('/dividir', async (req, res) =>{
    const dividir = await divisao();
    res.json({
        resultado: dividir,
        operacao: "divisão",
        status: "sucesso"
    }); 
});

console.log("--- Iniciando Subtração ---")

app.get('/subtrair', async (req, res) =>{
    const subtrair = await subtracao();
    res.json({
        resultado: subtrair,
        operacao: "subtração",
        status: "sucesso"
    }); 
});

console.log("--- Iniciando Potência ---")

app.get('/potenciacao', async (req, res) =>{
    const potenciacao = await potencia();
    res.json({
        resultado: potenciacao,
        operacao: "potenciação",
        status: "sucesso"
    }); 
});

console.log("--- Iniciando Programa de Carro Econômico ---")

app.get('/eco', async (req, res) =>{
    const eco = await carroEconomico();
    res.json({
        resultado: eco,
        operacao: "Econômico?",
        status: "sucesso"
    }); 
});

console.log("--- Iniciando Programa de Impar ou Par ---")

app.get('/ip', async (req, res) =>{
    const ip = await imparPar();
    res.json({
        resultado: ip,
        operacao: "Impar ou Par?",
        status: "sucesso"
    }); 
});

console.log("--- Iniciando Programa de Idade ---")

app.get('/idades', async (req, res) =>{
    const idades = await velhoNovo();
    res.json({
        resultado: idades,
        operacao: "calcularIdade",
        status: "sucesso"
    }); 
});

console.log("--- Iniciando Calcular IMC ---")

app.get('/imc', async (req, res) =>{
const imc = await calcularImc();
res.json({
    resultado: imc,
    operacao: "calcularIMC",
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

app.get('/ptt', async (req, res) =>{
const ptt = await calcularPotencia();
res.json({
    resultado: ptt,
    operacao: "calcularPotencia",
    status: "sucesso"
}); 
});

console.log("--- Iniciando Programa de Validador de Saida  ---")

app.get('/saida', async (req, res) =>{
const saida = await validadorSaida();
res.json({
    resultado: saida,
    operacao: "validadorSaída",
    status: "sucesso"
}); 
});

console.log("--- Iniciando Programa de Tabuada com for  ---")

app.get('/forabuada', async (req, res) =>{
const forbuada = await calcularTabuada();
res.json({
    resultado: forbuada,
    operacao: "TabuadaFor",
    status: "sucesso"
}); 
});

console.log("--- Iniciando Programa de Salario  ---")

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

console.log("--- Iniciando Programa de Idade Laço While  ---")

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
});

console.log("--- Fim do Programa ---")
