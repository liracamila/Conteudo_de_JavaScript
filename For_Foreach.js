//EXEMPLOS COM FOR


//Ex 1:
// for (inicialização; condição; incremento) {
//     código
//  };

// for (let i=2; i<100; i++) {
//     if(i % 2 == 0)
//         console.log(i);
//  };

//Ex 2:

// const valores = [100, 200, 300, 400, 500];

//  for (let i = 0; i < valores.length; i++) {
//     console.log("Indice:", i, "Valor:", valores[i]);
//  }

// Resultado
// Indice 0 Valor 100
// Indice 1 Valor 200
// Indice 2 Valor 300
// Indice 3 Valor 400
// Indice 4 Valor 500

// Calcular a soma de todos os números pares usando um laço for

// const numbers = [2, 4, 5, 7, 10, 11, 12];
// let sum = 0;

// for(let i=0; i<numbers.length; i++) {
//     if(numbers[i] % 2 === 0) {
//         sum += numbers[i];
//     }
// }

// console.log("Sum:", sum);

//EXEMPLOS COM FOREACH

// const notas = [8, 9, 10, 6.5, 8.5];

//  let soma = 0;

//  notas.foreach(nota => {
//     soma += nota;
//  });

//  let media = soma/notas.length;

//  console.log("Média: ", media);

// Calcular a média de todos os números usando o método foreach

const numbers = [2, 4, 5, 7, 10, 11, 12];
let average = 0;

numbers.forEach((number) => {
    average += number;
});
average /= numbers.length;

console.log("Average:", average);