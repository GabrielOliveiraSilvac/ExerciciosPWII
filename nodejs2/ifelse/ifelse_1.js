function carroEconomico(km, l) {

    const gasto = km / l;

    if (gasto >= 10) {
        return("Seu Carro é ECONÔMICO!")
    } else {
        return("Seu Carro NÃO é ECONÔMICO!!")
    }
}

export { carroEconomico };