import { pontuacao } from './opc.js'
const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');
const ctx3 = document.getElementById('myChart3');
const ctx4 = document.getElementById('myChart4');
let url = 'http://localhost:3000/SG'
let url2 = 'http://localhost:3000/melhores'
let url3 = 'http://localhost:3000/tabela'

//requisicao
let resp = await fetch(url)
let resp2 = await fetch(url2)
let resp3 = await fetch(url3)

//lidando com a resposta
let dados = await resp.json()
let dados2 = await resp2.json()
let dados3 = await resp3.json()

//Pega os dados e preenche no grafico de saldo de gols
let nomeTimes = []
let pontosTimes = []
let saldoTimes = []
dados.forEach (ele => {
    nomeTimes.push(ele.time)
    pontosTimes.push(ele.pts)
    saldoTimes.push(ele.sg) 
})

//Codigo para Preencher o Grafico dos 8 Melhores
let nomeTimesMelhores = []
let pontosTimesMelhores = []
dados2.forEach (ele2 => {
    nomeTimesMelhores.push(ele2.time)
    pontosTimesMelhores.push(ele2.pts)
})

//Codigo Para Preencher o Grafico de Percentual e a Tabela Completa
let nomeTimesTabela = []
let pontosTimesTabela = []
let percentualTimes = []
dados3.forEach (ele3 => {
    nomeTimesTabela.push(ele3.time)
    pontosTimesTabela.push(ele3.pts)
    let numeroOg = parseFloat(ele3.aproveitamento)
    percentualTimes.push(numeroOg)
})

//Criei o Preenchimento Para cada 1 pos estava dando erro nos graficos

//Grafico Com o Percentual Dos Times
new Chart(ctx3, {
    type: 'line',
    data: {
  labels: nomeTimesTabela,
  datasets: [{
    label: 'Percentual',
    data: percentualTimes,
    fill: false,
    borderColor: 'rgb(192, 75, 75)',
    backgroundColor: 'rgba(235, 244, 116, 0.84)',
    tension: 0.1
  }],
  options: {
    responsive: true,
    maintainAspectRatio: false,
  }
}
});

//Tabela Completa em Um Grafico
    new Chart(ctx4, {
    type: 'bar',
    data: {
      labels: nomeTimesTabela,
      datasets: [{
        label: 'PONTOS',
        data: pontosTimesTabela ,
        borderWidth: 1,
        borderColor: 'rgb(0, 0, 0)',
        backgroundColor: 'rgb(0, 255, 0)'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
//Os 8 Melhores em Grafico
    new Chart(ctx2, {
    type: 'radar',
    data:{
    labels: nomeTimesMelhores,
  datasets: [{
    label: 'Pontos',
    data: pontosTimesMelhores,
    fill: true,
    backgroundColor: 'rgba(88, 5, 5, 0.85)',
    borderColor: 'rgb(19, 17, 17)',
    pointBackgroundColor: 'rgb(255, 0, 136)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 0, 55)'
  },
],
  options: {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        borderWidth: 3
      }
    }
  },
}
});

  
//Times com Maior Saldo de gols  
  new Chart(ctx, {
  type: 'polarArea',
  data:{
    labels: nomeTimes,
    datasets: [{
      label: 'Saldo',
      data: saldoTimes,
      borderColor: 'rgb(0, 0, 0)',
      backgroundColor: [
        'rgb(255, 99, 99)',
        'rgb(75, 192, 192)',
        'rgb(125, 255, 86)',
        'rgb(255, 255, 255)',
        'rgb(54, 162, 235)',
      ]
    }]
  },
  options:  {
    responsive: true,
    maintainAspectRatio: false,
  }
  });
