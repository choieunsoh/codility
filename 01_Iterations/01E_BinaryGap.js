function solution(N) {
  const A = N.toString(2)
  if (A.indexOf('0') === -1) return 0

  let [i, max] = [0, 0]
  while (i < A.length) {
    const j = A.indexOf('1', i + 1)
    if (j === -1) break
    if (j - i - 1 > max) max = j - i - 1
    i = j
  }
  return max
}

var A = 1041
console.log(A, A.toString(2), solution(A))

var A = 15
console.log(A, A.toString(2), solution(A))

var A = 32
console.log(A, A.toString(2), solution(A))
