//Seção 4 - Vetor de Remoção

//Declaração de Vetor
const list = [1, 2, 3, 4, 5]

//Declaração de Variaveis
let  s = 0;

//laço For
for (let index = 0; index < list.length - 1; index++) {
    s += list[index]
    console.log(s)
}

