// Função para realizar a adição
function adicionar(num1, num2) {
    return num1 + num2;
  }

  // Função para realizar a subtração
  function subtrair(num1, num2) {
    return num1 - num2;
  }

  // Função para realizar a multiplicação
  function multiplicar(num1, num2) {
    return num1 * num2;
  }

  // Função para realizar a divisão
  function dividir(num1, num2) {
    if (num2 === 0) {
      return "Erro: Divisão por zero!";
    }
    return num1 / num2;
  }

  // Exemplos de uso da calculadora
  console.log(adicionar(5, 3));      // Soma: 5 + 3 = 8
  console.log(subtrair(10, 4));     // Subtração: 10 - 4 = 6
  console.log(multiplicar(2, 6));   // Multiplicação: 2 * 6 = 12
  console.log(dividir(8, 2));       // Divisão: 8 / 2 = 4
  console.log(dividir(5, 0));       // Tentativa de divisão por zero
