    function calcularSalarios(listaSalarios) {
    let soma = 0;
    let mais_alto = 0;
    let j = 0;

    // O laço agora percorre a lista que você enviar pela URL
    for (let i = 0; i < listaSalarios.length; i++) {
        let salario = listaSalarios[i];
        soma += salario;

        if (salario > mais_alto) {
            j = i + 1;
            mais_alto = salario;
        }
    }

    let resposta = "A Soma dos Salários é de: R$ " + soma + "<br>";
    resposta += "A Média dos Salários é de: R$ " + (soma / listaSalarios.length) + "<br>";
    resposta += "O Funcionário com salário mais alto é o Nº " + j + "<br>";
    resposta += "Este recebe: R$ " + mais_alto + "<br>";

    return resposta;
}

export { calcularSalarios };