function velhoNovo() {

     const idade = anoatual - nascimento;
        
	 if (idade < 10) {
		return("Você é uma criança: " +idade+ " Anos de Idade");
		}

	else if (idade < 18) {
		return("Você é adolescente: " +idade+ " Anos de Idade");
		}

	else if (idade < 60) {
		return("Você é Adulto: " +idade+ " Anos de Idade");
		}

	else {
		return("Você é Velho: " +idade+ " Anos de Idade");
		}

}

export { velhoNovo };