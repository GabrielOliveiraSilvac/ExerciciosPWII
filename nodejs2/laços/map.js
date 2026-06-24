function vetorNovoVelho(){
    //Declaração de Vetor
    const list = [1, 2, 3, 4, 5]

    //laço Map
    let teste = list.map(list => list * 10 / 2)
    let resultado = ("Vetor Original: " +list + '<br>')
    resultado += ("Vetor Novo: " +teste)

    return resultado;
}

export{vetorNovoVelho}