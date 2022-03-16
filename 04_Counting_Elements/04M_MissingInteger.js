function solution(A) {
  const found = []
  for (let i = 0; i < A.length; i++) {
    found[A[i]] = true
  }
  for (let i = 1; i <= found.length; i++) {
    if (found[i] === undefined) return i
  }
  return 1
}

var A = [1, 2, 3, 2, 5, 6]
console.log(solution(A))

A = [2, 2, 3, 3]
console.log(solution(A))

A = [1, 2, 3, 4, 5]
console.log(solution(A))

A = [-3, -1]
console.log(solution(A))
