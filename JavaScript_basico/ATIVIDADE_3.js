// Crie um array com 5 números reais, e para cada elemento utilize funções matemáticas para exibir respectivamente:

// a. O quadrado
// b. A raiz quadrada
// c. Apenas a parte inteira
// d. O número arredondado para baixo
// e. O número arredondado para cima

const valores = [1, 8.12, 17, 34.8, 50];

for (let i = 0; i < valores.length; i++) {

    console.log("Para o número: ", valores[i]);
    console.log("O quadrado é: ", Math.pow(valores[i], 2));
    console.log("A raiz quadrada é: ", Math.sqrt(valores[i]));
    console.log("Apenas a parte inteira é:", Math.trunc(valores[i]));
    console.log("Arredondando para cima fica: ", Math.ceil(valores[i]));
    console.log("Arredondando para baixo fica: ", Math.floor(valores[i]));
    console.log("------------------------------");
 }