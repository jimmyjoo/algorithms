// https://programmers.co.kr/learn/courses/30/lessons/12969

process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  const row = `${'*'.repeat(a)}\n`;
  const result = row.repeat(b);
  console.log(result);
});
