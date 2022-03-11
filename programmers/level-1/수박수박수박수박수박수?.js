// https://programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
  return Array.from({ length: n }, (_, i) => (i % 2 ? '박' : '수')).join('');
}

// 다른 분의 풀이
function solution2(n) {
  return '수박'.repeat(n).slice(0, n);
}
