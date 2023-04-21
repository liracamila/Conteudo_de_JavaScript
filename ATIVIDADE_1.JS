//Crie um programa Javascript baseado nas tarefas descritas a seguir:
//1. Crie um array com 10 elementos e mostre-os na tela usando cada uma das estruturas de repetição: while, do-while, for e foreach.
//2. Faça um algoritmo para exibir a tabuada de 2. O resultado na tela deve ser algo parecido com isso:
// Resultado esperado
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10
// 2 x 6 = 12
// 2 x 7 = 14
// 2 x 8 = 16
// 2 x 9 = 18
// 2 x 10 = 20

var cont = 0;
var tabuada = 2;
var resultado = cont * tabuada;

console.log("Tabuada do ", tabuada, ":");

do {
    resultado = cont * tabuada;
    console.log(tabuada, " x ", cont, " = ", resultado);
    cont++;
} while (cont <= 10);

//Ok