//##. 4. 계산기 문제

const calculate = (number1, operator, number2) => {
  let result = 0;

  switch(operator) {
    case "+" :
      result = number1 + number2;
      break;
    case "-" :
      result = number1 - number2;
      break;
    case "*" :
      result = number1 * number2;
      break;
    case "/" :
      result = number1 / number2;
      break;
    default :
      return result;
  }

  return result;
}
