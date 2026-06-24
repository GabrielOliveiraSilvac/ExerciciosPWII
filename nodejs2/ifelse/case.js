function calcularImc(h, p) {

    h = h * h;
    let imc = p / h;

// Switch Case
    switch (true) {
        case imc < 18.5: 
        return("Excesso de Magreza!")
        break;

        case imc < 25:
        return("Peso Normal!")
        break;

        case imc <  30:
        return("Excesso de Peso!")
        break;

        case imc < 35:
        return("Obesidade Grau I")
        break;

        case imc < 40:
        return("Obesidade Grau II")
        break;

        case imc > 40:
        return("Obesidade Grau III")
        break;
    }   
   
}

export {calcularImc};