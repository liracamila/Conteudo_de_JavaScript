// while (condição) {
//     código
//  };

//  do {
//     código
//  } while (condição);

// let salario = 1000;

//---------------------------------------------------------

//LOOP WHILE
//  while (salario < 5000) {
//     salario = salario + 500;

//     // imprime o salário até o valor se igualar a 5000
//     console.log("Salário: R$ ", salario); 
//  };

//---------------------------------------------------------

//LOOP DO-WHILE
// let aumento = 100;

//  do {
//     console.log("Aumento de: R$ ", aumento); 

//     aumento = aumento + 50;
//  } while (aumento <= 1000);

//---------------------------------------------------------

//CONTADOR DE 2 EM 2
//  let cont = 2;

//  while (cont < 100) {
//     cont = cont + 2
//     if (cont % 2 == 0)
//         console.log(cont);
//  };


//Escrever um programa usando um loop do-while que imprime todos os números ímpares de 1 a 20.
let number = 0;

do {
    if (number % 2 !== 0) {
        console.log(number);
    }
    number = number + 1;
} while (number <= 20)

