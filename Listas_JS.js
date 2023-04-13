// índice        0   1   2   3   4
const numeros = [50, 20, 15, 14, 8];
// O número 15 está na posição 3 do array e possui índice 2

// Exibe o resultado 5 para o tamanho do array
console.log(numeros.length) //5

//Acessando um elemento
console.log(numeros[1]); //20

//Adicionar no final
numeros.push(10);

console.log(numeros); // 50, 20, 15, 14, 8, 10

//Adicionar no início
numeros.unshift(10);

console.log(numeros); // 10, 50, 20, 15, 14, 8, 10

//Remover do final
numeros.pop();

console.log(numeros); // 10, 50. 20, 15, 14, 8

//Remover do início
numeros.shift();

console.log(numeros); // 50, 20, 15, 14, 8

//Juntar dois arrays
const numerosA = [50, 20, 15];
const numerosB = [14, 8];
numerosA.concat(numerosB);

console.log(numerosA); // 50, 20, 15, 14, 8