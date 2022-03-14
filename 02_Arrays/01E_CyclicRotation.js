function solution(A, K) {
  const result = []
  for (let i = 0; i < A.length; i++) {
    result[(i + K) % A.length] = A[i]
  }
  return result
}

var A = [3, 8, 9, 7, 6]
var K = 3
console.log(solution(A, K))

A = [0, 0, 0]
K = 1
console.log(solution(A, K))

A = [1, 2, 3, 4]
K = 4
console.log(solution(A, K))

A = [5, -100]
K = 1
console.log(solution(A, K))
