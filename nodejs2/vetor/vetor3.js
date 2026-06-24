function vetorBusca(){
    //Declaração de Vetor
    const list = [10, 2, 4, 90, 3]

    //Laço For
    const numero = list.filter(list => list === 90);
    return("Numero Procurado: " +numero)
}

export{vetorBusca}