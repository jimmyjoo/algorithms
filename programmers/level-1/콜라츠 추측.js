// https://programmers.co.kr/learn/courses/30/lessons/12943

// 나의 풀이
function solution(num) {
  let count = 0;
  while (count !== 500 && num !== 1) {
    if (!(num % 2)) num /= 2;
    else num = num * 3 + 1;
    count++;
  }
  return count < 500 ? count : -1;
}

/*
다른 분 풀이
함수형 프로그래밍을 활용하신 것 같다.
세부 로직을 함수로 세분화시켜 유지보수 향상과 부수효과를 억제
*/
const solution = (num) => collatzGuessCount(num, 0);

const collatzGuessCount = (num, acc) =>
  num === 1
    ? acc > 500
      ? -1
      : acc
    : collatzGuessCount(processCollatz(num), acc + 1);

const processCollatz = (num) => (num % 2 === 0 ? num / 2 : num * 3 + 1);
