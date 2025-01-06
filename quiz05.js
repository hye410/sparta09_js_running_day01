// ##5. 점수 수정하기

// 4번 문제의 계산기
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



const editScore = (scores) => {
  const ADDED_SCORE = 3;
  const newScores = scores.map((score) => calculate(score,'+',ADDED_SCORE));
  return newScores;
}

