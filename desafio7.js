const prompt = require("prompt-sync")();

// Função para somar dois números
function soma(num1, num2) {
    return num1 + num2;
  }
  
  // Função para subtrair dois números
  function subtracao(num1, num2) {
    return num1 - num2;
  }
  
  // Função para multiplicar dois números
  function multiplicacao(num1, num2) {
    return num1 * num2;
  }
  
  // Função para dividir dois números
  function divisao(num1, num2) {
    // Verifica se o divisor é diferente de zero para evitar divisão por zero
    if (num2 !== 0) {
      return num1 / num2;
    } else {
      return "Erro: Divisão por zero!";
    }
  }
  
  // Função principal que controla a execução da calculadora
  function calculadora() {
    let operacao;
    let num1, num2;  // Move a declaração das variáveis para fora do bloco switch
  
    while (true) {
      // Mostra as opções disponíveis
      console.log("Opções disponíveis:");
      console.log("1. Soma");
      console.log("2. Subtração");
      console.log("3. Multiplicação");
      console.log("4. Divisão");
      console.log("5. Sair");
  
      // Solicita a escolha da operação
      operacao = prompt("Escolha uma operação (1 a 5): ");
  
      // Verifica a escolha do usuário
      switch (operacao) {
        case "1":
          num1 = parseFloat(prompt("Digite o primeiro número: "));
          num2 = parseFloat(prompt("Digite o segundo número: "));
          console.log("Resultado: " + soma(num1, num2));
          break;
        case "2":
          num1 = parseFloat(prompt("Digite o primeiro número: "));
          num2 = parseFloat(prompt("Digite o segundo número: "));
          console.log("Resultado: " + subtracao(num1, num2));
          break;
        case "3":
          num1 = parseFloat(prompt("Digite o primeiro número: "));
          num2 = parseFloat(prompt("Digite o segundo número: "));
          console.log("Resultado: " + multiplicacao(num1, num2));
          break;
        case "4":
          num1 = parseFloat(prompt("Digite o primeiro número: "));
          num2 = parseFloat(prompt("Digite o segundo número: "));
          console.log("Resultado: " + divisao(num1, num2));
          break;
        case "5":
          console.log("Até a próxima!");
          return; // Encerra a execução da função
        default:
          console.log("Opção inválida. Tente novamente.");
      }
    }
  }
  
  // Chama a função principal da calculadora
  calculadora();
  