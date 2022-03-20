// https://programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  const min = Math.min(...arr);
  return arr.length === 1 ? [-1] : arr.filter((item) => item !== min);
}
