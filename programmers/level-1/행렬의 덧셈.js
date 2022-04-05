// https://programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
  const sumArr = arr1.map((elemArr, i) =>
    elemArr.map((elem, j) => elem + arr2[i][j])
  );
  return sumArr;
}
