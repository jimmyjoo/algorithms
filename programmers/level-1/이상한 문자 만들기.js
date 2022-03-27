// https://programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
  const str = s
    .split(' ')
    .map((item) =>
      item
        .split('')
        .map((char, i) => (!(i % 2) ? char.toUpperCase() : char.toLowerCase()))
        .join('')
    )
    .join(' ');
  return str;
}

console.log(solution('try hello world'));
