//Exemplos de Função

// function hello() {
//     console.log("Hello World!");
//  }

// hello()

//Ex 2

// function hello(texto) {
//     console.log("Olá", texto);
//  }

//  hello("Rodrigo")

//Ex 3

// let numeroA = 5;
// let numeroB = 10;

// function calcularMedia(a, b) {
//     let soma = a + b;
//     let media = soma / 2;

//     console.log("Media: ", media);
// }

// calcularMedia(numeroA, numeroB);

//Funções matemáticas prontas:
// match.round(): arredondar um valor de ponto flutuante
// math.ceil(): faz o arredondamento para o valor mais alto
// math.floor(): faz o arredondamento para o valor mais baixo
// math.random(): retorna um número aleatório entre 0 e 1
// math.sqrt(): retorna o valor da raiz quadrada de um número
// math.trunc(): em um número que contém casas decimais, retorna apenas a parte inteira

//Criar uma função chamada "calculateRectangleArea" que aceita dois parâmetros, "largura" e "altura",
//e calcula a área de um retângulo com essas dimensões.
//após calcular a área utilize o seguinte comando para alimentar o comando console.log: return area


//Resposta 1
// let largura = 5;
// let altura = 10;

// function calculateRectangleArea(a, b) {
//     let area = a * b;

//     console.log("Area: ", area);
// }

// calculateRectangleArea(largura, altura);

//Resposta 2
function calculateRectangleArea(largura, altura) {
    let area = largura * altura;
    return area;
  }

console.log("Area de : " + calculateRectangleArea(10, 5) + " metros quadrados");