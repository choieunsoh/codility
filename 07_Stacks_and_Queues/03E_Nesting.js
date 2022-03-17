// https://app.codility.com/programmers/lessons/7-stacks_and_queues/nesting/

function solution(S) {
  if (S.length % 2 > 0) return 0
  let count = 0
  for (const s of S) {
    if (s === '(') count++
    else if (s === ')') count--
    if (count < 0) return 0
  }
  return count === 0 ? 1 : 0
}

var S = '(()(())())'
console.log(S, solution(S))

var S = '())'
console.log(S, solution(S))
