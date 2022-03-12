// https://programmers.co.kr/learn/courses/30/lessons/12928

function solution(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += n % i === 0 ? i : 0;
  }

  return sum;
}

/*
16번 케이스에서 런타임 에러
function solution(n) {
  return Array.from({ length: n }, (_, i) => i + 1)
  .reduce((acc, cur) => n % cur === 0 ? acc + cur : acc);

}
*/
