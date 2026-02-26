//Seção 1 - Vetor de Acumulação

//Declaração de Vetor
const list = [1, 2, 3, 4, 5]

//Declaração de Variaveis
let  s = 0;

//laço For
for (let index = 0; index < list.length; index++) {
    s += list[index]
    console.log(s)
}