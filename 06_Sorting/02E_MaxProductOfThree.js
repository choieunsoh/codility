function solution(A) {
  A.sort((a, b) => a - b)
  const N = A.length
  return Math.max(A[0] * A[1] * A[N - 1], A[N - 3] * A[N - 2] * A[N - 1])
}

var A = [-3, 1, 2, -2, 5, 6]
console.log(solution(A))

var A = [-3, 1, 2, -11, 5, 6]
console.log(solution(A))
