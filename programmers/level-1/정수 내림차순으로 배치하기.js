// https://programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
  return Number(
    n
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}
