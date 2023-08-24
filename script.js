function Calculadora() {

  const operation = Number(prompt('Escolha uma das operações:\n1- Soma (+),\n2- Substração (-),\n3- Multiplicação (*),\n4- Divisão Real (/), \n5- Resto da Divisão Real (%), \n6- Potenciação (**)'));

  if (!operation || operation < 0 || operation >= 7) {
    alert('Opção Inválida, digite opção Válida!');
    Calculadora();
  } else {

    let numberOne = Number(prompt('Digite o primeiro número'));
    let numberTwo = Number(prompt('Digite o segundo número'));
    let result;

    switch (operation) {
      case 1:
        Soma();
        newOption();
        break;
      case 2:
        Subtracao();
        newOption();
        break;
      case 3:
        Multiplicacao();
        newOption();
        break;
      case 4:
        DivisaoReal();
        newOption();
        break;
      case 5:
        RestoDivisaoReal();
        newOption();
        break;
      case 6:
        Potenciacao();
        newOption();
        break;
      default:
        alert('Opção Inválida, digite opção Válida!');
        break;
    };


    function newOption() {
      let option = Number(prompt('Deseja fazer uma nova operação?\n1- Sim\n2- Não'));

      if (option == 1) {
        Calculadora();
      } else if (option == 2) {
        alert('Até mais!');
      }else {
        alert('Digite uma opção válida');
      };
    };

    function Soma () {
      result = numberOne + numberTwo;
      prompt(`A soma de ${numberOne} + ${numberTwo} é igual a: ${result}`);
    };

    function Subtracao () {
      result = numberOne - numberTwo;
      prompt(`A subtração de ${numberOne} - ${numberTwo} é igual a: ${result}`);
    };

    function Multiplicacao () {
      result = numberOne * numberTwo;
      prompt(`A multiplicação de ${numberOne} * ${numberTwo} é igual a: ${result}`);
    };

    function DivisaoReal () {
      result = numberOne / numberTwo;
      prompt(`A divisão real de ${numberOne} / ${numberTwo} é igual a: ${result}`);
    };

    function RestoDivisaoReal() {
      result = numberOne % numberTwo;
      prompt(`O resto da divisão real de ${numberOne} % ${numberTwo} é igual a: ${result}`);
    };

    function Potenciacao() {
      result = numberOne ** numberTwo;
      prompt(`A potenciação de ${numberOne} ** ${numberTwo} é igual a: ${result}`);
    };
  } 
};

Calculadora();