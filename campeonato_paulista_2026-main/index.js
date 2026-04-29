// modulos externos
import express from 'express'

// modulos internos
import { times } from './bd.js'

//funções
import { pontuacao } from './opc.js'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
}) 

//Tabela Completa
app.get('/tabela', (req, res) => {
  res.json(pontuacao)
}) 

//Buscar Times com Base no Nome
app.get('/times/:nome', (req, res) => {
  const busca = req.params.nome;

  const team = pontuacao.find(item =>
    item.time.toLowerCase() === busca.toLowerCase()
  );
  res.json(team)
}) 

//Times do Top8 e Times Que Passaram de Fase
app.get('/melhores', (req, res) => {
  const top8 = pontuacao.filter(time => time.posicao <= 8);
  res.json(top8)
}) 

// 4 / 5 Times Com Mais Saldo de Gols
app.get('/sg', (req, res) => {
  const saldo = pontuacao.filter(time => time.sg >= 4);
  res.json(saldo)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

