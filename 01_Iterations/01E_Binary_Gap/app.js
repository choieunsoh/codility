// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let max = 0
  const num = N.toString(2)
  let i = num.indexOf('0')
  while (i < num.length && i >= 0) {
    let j = num.indexOf('1', i + 1)
    if (j === -1) break
    if (j - i > max) {
      max = j - i
    }
    i = num.indexOf('0', j + 1)
  }
  //console.log(num, max);
  return max
}
console.log(solution(328))
