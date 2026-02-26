//Seção 2 - Vetor de Soma

//Declaração de Vetores
const a = [1, 2, 3, 4, 5]
const b = [6, 7, 8, 9, 10]

//Declaração de Variaveis
let c;

//Laço For
for (let index = 0; index < a.length; index++) {
    c = a[index] + b[index];
    console.log("soma dos numeros " +c)
}

