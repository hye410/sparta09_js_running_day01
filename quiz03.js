//##3. 홀짝 판별기 
// 1 이상의 자연수라고 가정하겠습니다... 

function getNumberType(number) {
  let answer = "홀수";
  if(number%2 === 0) answer = "짝수";
  return answer;
}

console.log(getNumberType(10));
console.log(getNumberType(7));