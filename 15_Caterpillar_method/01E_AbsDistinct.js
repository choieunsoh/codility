function solution(A) {
  const distinct = new Set()
  for (const a of A) {
    distinct.add(Math.abs(a))
  }
  return distinct.size
}

var A = [-5, -3, -1, 0, 3, 4]
console.log(solution(A))
