function solution(A) {
  return (
    ((A.length + 1) * (A.length + 2)) / 2 - A.reduce((sum, x) => sum + x, 0)
  )
}

var A = [1, 2, 3, 5]
console.log(solution(A))
