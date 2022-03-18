function solution(N) {
  let [minPerimeter, a] = [2 * (N + 1), 1]
  while (a * a < N) {
    if (N % a === 0) {
      const b = N / a
      const perimeter = 2 * (a + b)
      if (perimeter < minPerimeter) {
        minPerimeter = perimeter
      }
    }
    a++
  }
  if (a * a === N && 4 * a < minPerimeter) {
    minPerimeter = 4 * a
  }
  return minPerimeter
}

console.log(30, solution(30))
console.log(36, solution(36))
console.log(1e8, solution(1e8))
