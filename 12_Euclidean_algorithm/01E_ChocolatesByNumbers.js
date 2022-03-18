function solution(N, M) {
  const gcd = (a, b) => {
    if (a % b === 0) return b
    else return gcd(b, a % b)
  }

  const lcm = (N * M) / gcd(N, M)
  return lcm / M
}

console.log(solution(10, 4))
