// https://programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  return s
    .split('')
    .map((elem) => {
      if (elem === ' ') return elem;
      const charCode = elem.charCodeAt();
      return elem.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(charCode + n - 26)
        : String.fromCharCode(charCode + n);
    })
    .join('');
}
