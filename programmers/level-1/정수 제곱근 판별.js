// https://programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
  const base = Math.sqrt(n);
  return Number.isInteger(base) ? (base + 1) ** 2 : -1;
}
