function solution(A) {
  let [min, sumLeft, sumRight] = [
    Number.MAX_SAFE_INTEGER,
    0,
    A.reduce((sum, x) => sum + x, 0),
  ]
  for (let i = 0; i < A.length - 1; i++) {
    sumLeft += A[i]
    sumRight -= A[i]
    min = Math.min(min, Math.abs(sumLeft - sumRight))
  }
  return min
}

var A = [3, 1, 2, 4, 3]
console.log(solution(A))

A = [1, 1]
console.log(solution(A))

A = [-100, 100]
console.log(solution(A))
