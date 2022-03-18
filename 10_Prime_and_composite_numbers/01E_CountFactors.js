function solution(N) {
  if (N <= 1) return 1
  let [count, n] = [0, 1]
  while (n * n <= N) {
    if (N % n === 0) count += 2
    n++
  }
  if (n * n === N) count++
  return count
}
for (let i = 0; i <= 10; i++) {
  console.log(solution(i))
}
console.log(solution(24))
console.log(solution(23))
console.log(solution(21))
console.log(solution(55))
console.log(solution(81))
