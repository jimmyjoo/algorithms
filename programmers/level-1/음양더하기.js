// https://programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  const total = absolutes.reduce(
    (acc, cur, i) => acc + (signs[i] > 0 ? cur : -cur),
    0
  );
  return total;
}
