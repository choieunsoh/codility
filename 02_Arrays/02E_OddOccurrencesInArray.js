function solution(A) {
  const map = {}
  for (const a of A) {
    map[a] = ((map[a] || 0) + 1) % 2
  }
  for (const num in map) {
    if (map[num] === 1) return Number(num)
  }
  return 0
}

var A = [9, 3, 9, 3, 9, 7, 9]
console.log(A.toString(), solution(A))
