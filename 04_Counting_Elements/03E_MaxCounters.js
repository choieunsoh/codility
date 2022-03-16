function solution(N, A) {
  let [counter, start] = [0, 0]
  let pos = A.indexOf(N + 1)
  while (pos !== -1) {
    const map = {}
    let count = 0
    for (let i = start; i < pos; i++) {
      map[A[i]] = (map[A[i]] || 0) + 1
      if (map[A[i]] > count) count = map[A[i]]
    }
    counter += count
    start = pos + 1
    pos = A.indexOf(N + 1, start)
  }

  const result = new Array(N).fill(counter)
  for (let i = start; i < A.length; i++) {
    result[A[i] - 1]++
  }

  return result
}

var A = [3, 4, 4, 6, 1, 4, 4]
console.log(solution(5, A))

A = [3, 4, 4, 6, 1, 4, 4, 6]
console.log(solution(5, A))

A = [3, 4, 4, 6, 1, 4, 4, 6, 1, 1, 1, 2, 4]
console.log(solution(5, A))
