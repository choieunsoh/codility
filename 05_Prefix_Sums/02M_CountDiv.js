function solution(A, B, K) {
  A = Math.ceil(A / K) * K
  B = Math.floor(B / K) * K
  return (B - A) / K + 1
}

var [A, B, K] = [6, 12, 2]
console.log(solution(A, B, K))

var [A, B, K] = [6, 11, 2]
console.log(solution(A, B, K))

var [A, B, K] = [5, 11, 2]
console.log(solution(A, B, K))

var [A, B, K] = [0, 11, 2]
console.log(solution(A, B, K))
