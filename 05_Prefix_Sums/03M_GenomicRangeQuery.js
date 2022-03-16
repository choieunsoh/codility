function solution(S, P, Q) {
  const factor = { A: 1, C: 2, G: 3, T: 4 }
  const counter = [0, 0, 0, 0]
  const sequences = [[...counter]]
  for (const s of S) {
    counter[factor[s] - 1] = (counter[factor[s] - 1] || 0) + 1
    sequences.push([...counter])
  }

  const result = []
  for (let i = 0; i < P.length; i++) {
    const [from, to] = [Q[i] + 1, P[i]]
    for (const key in factor) {
      if (
        sequences[from][factor[key] - 1] - sequences[to][factor[key] - 1] >
        0
      ) {
        result.push(factor[key])
        break
      }
    }
  }
  return result
}

var S = 'CAGCCTA'
var P = [2, 5, 0]
var Q = [4, 5, 6]
console.log(solution(S, P, Q))
