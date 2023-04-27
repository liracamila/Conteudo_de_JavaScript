class Pessoa { 

    constructor(nome, sobrenome, email, idade) {

		this.nome = nome;
		this.sobrenome = sobrenome;
		this.email = email;
		this.idade = idade;
	} //Atributos

	exibir() {
		console.log(this.nome)
		console.log(this.sobrenome)
		console.log(this.email)
		console.log(this.idade)
	} //Metodo

}

module.exports = Pessoa