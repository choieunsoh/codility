function solution(A) {
  let result = -1
  const half = Math.floor(A.length / 2)
  const map = {}
  for (let i = 0; i < A.length; i++) {
    const x = A[i]
    map[x] = (map[x] || 0) + 1
    if (map[x] > half) return i
  }
  return result
}
