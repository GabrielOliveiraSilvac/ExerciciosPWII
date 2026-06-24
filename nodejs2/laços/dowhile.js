function calcularPotencia(n, c) {

    let i = 1;

    console.log("--- Calculando " +(n)+ " elevado a " +(e)+ " ---");

    // Laço do while
    do {
        c = c * n; 
        return("Seu Numero em Potencia: " + c);
        i++;
    } while (i <= c);

}

export {calcularPotencia};