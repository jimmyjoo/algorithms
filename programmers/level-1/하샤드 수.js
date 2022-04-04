// https://programmers.co.kr/learn/courses/30/lessons/12947?language=javascript

function solution(x) {
  const sum = x
    .toString()
    .split('')
    .reduce((acc, cur) => acc + Number(cur), 0);
  return !(x % sum);
}
