function solution1(A, K) {
  const result = []
  for (let i = 0; i < A.length; i++) {
    result[(i + K) % A.length] = A[i]
  }
  return result
}
function solution2(A, K) {
  const result = []
  // Right > K
  // Left N - K
  K = A.length - (K % A.length)
  return [...A.slice(K, A.length), ...A.slice(0, K)]
}
function solution(A, K) {
  const result = []
  function gcd(a, b) {
    if (b === 0) return a
    else return gcd(b, a % b)
  }
  // Right > K
  // Left N - K
  const N = A.length
  K = N - (K % N)
  const X = gcd(K, N)
  for (let i = 0; i < X; i++) {
    const temp = A[i]
    let j = i
    while (true) {
      let k = (j + K) % N
      if (k === i) break
      A[j] = A[k]
      //console.log(i, j, k, A.toString())
      j = k
    }
    A[j] = temp
  }
  return A
}

var A = [3, 8, 9, 7, 6, 1, 2]
var K = 10
console.log(solution(A, K).toString())

A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
K = 9
console.log(solution(A, K).toString())

A = [0, 0, 0]
K = 1
console.log(solution(A, K).toString())

A = [1, 2, 3, 4]
K = 4
console.log(solution(A, K).toString())

A = [5, -100]
K = 1
console.log(solution(A, K).toString())
