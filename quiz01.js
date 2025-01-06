// ## 1. 빈칸 채우기 문제

//1-1.
let uninitialized;
console.log(uninitialized); // undefined , 선언이 되었지만 아직 값이 할당되지 않았기 때문이다.


//1-2.
const apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable

// 이유
// constant variable에는 할당할 수 없다는 에러가 발생한 것으로 보아, 재할당이 되지 않는 const로 선언한 것이다.


//1-3.
let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 19

// 이유
// array에서 index 번호는 앞에서부터 0,1,2... 이다.


//1-4.
let mySchedule = "";
console.log(mySchedule || false); // false
console.log(!!mySchedule); // false

//이유
// 빈문자열은 falsy로 취급된다.
// 첫 번째 콘솔은 OR연사자로 연결되어 있고 둘 다 false이기 때문에 false가 출력된다.
// 두 번째 콘솔은 falsy 앞에 !!가 붙어 boolean형인 false가 출력된다.

