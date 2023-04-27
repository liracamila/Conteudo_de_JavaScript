class Petshop {

    constructor(animal, idade, banho, tosa) {
		this.animal = animal;
		this.idade = idade;
		this.banho = banho;
		this.tosa = tosa;
	} //Atributos

	exibir() {
		console.log(this.animal)
		console.log(this.idade)
		console.log(this.banho)
		console.log(this.tosa)
	} //Metodo

}

module.exports = Petshop