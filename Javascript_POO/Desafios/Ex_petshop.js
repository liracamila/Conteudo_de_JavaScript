const animal = require ('./classPetshop')

const Petshop = new animal('Lulu', '4', 'sim', 'nao');

try {
    Petshop.exibir(); // chama metodo exibir
    console.lg('ola!');
} catch (error) {
    console.log("FALHA DETECTADA")
}

