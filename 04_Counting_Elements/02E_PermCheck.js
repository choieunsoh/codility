function solution(A) {
  const counter = new Set(A)
  return counter.size === A.length &&
    (A.length * (A.length + 1)) / 2 === A.reduce((s, x) => s + x, 0)
    ? 1
    : 0
}

var A = [4, 1, 2, 3]
console.log(solution(A))

A = [4, 2, 1]
console.log(solution(A))

A = [9, 5, 7, 3, 2, 7, 3, 1, 10, 8]
console.log(solution(A))
