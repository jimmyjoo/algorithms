// https://programmers.co.kr/learn/courses/30/lessons/12954

function solution(x, n) {
  const arr = Array.from({ length: n }, (_, i) => x * (i + 1));
  return arr;
}
