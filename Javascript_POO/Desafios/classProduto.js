class Produto { 

    constructor(codigo, item, tipo, valor, embalagem) {
		this.codigo = codigo
		this.item = item;
		this.tipo = tipo;
		this.valor = valor;
		this.embalagem = embalagem;
	} //Atributos

	exibir() {
		console.log(this.codigo)
		console.log(this.item)
		console.log(this.tipo)
		console.log('R$ ' , this.valor, '/ ' , this.embalagem)
	} //Metodo

}

module.exports = Produto