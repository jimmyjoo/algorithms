// https://programmers.co.kr/learn/courses/30/lessons/77484?language=javascript

function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  const zeroCount = lottos.filter((lotto) => !lotto).length;
  const minCount = lottos.filter((lotto) => win_nums.includes(lotto)).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}
