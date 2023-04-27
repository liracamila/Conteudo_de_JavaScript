// “() =>” a sintaxe lembra uma seta

// // Function
// function hello(nome) {
//     return `Meu nome é ${nome}`;
//  }

//  // Arrow Function
//  const hello = nome => `Meu nome é ${nome}`;

// // Arrow Function
// const soma = (a, b) => a + b;

// //Método find para encontrar em uma lista o usuário cujo id é igual a 3

// console.log(soma (5, 3))

// const alunos = [
//     { id: 1, nome: 'Maria da Silva' },
//     { id: 2, nome: 'João Fernando' },
//     { id: 3, nome: 'Pedro dos Santos' },
//     { id: 4, nome: 'Silvia Maria' }
//    ]

// const aluno = alunos.find(aluno => aluno.id === 3)

// console.log(aluno.nome) // Pedro dos Santos

//Escreva uma função usando a sintaxe da função de seta (arrow) que aceita dois números como argumentos e retorna sua média aritmética.

const media = (a, b) => (a + b) / 2;

console.log("A media é: " + media(22,10)) // retorna média 16

