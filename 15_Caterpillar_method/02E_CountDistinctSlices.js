function solution(M, A) {
  let set = new Set()
  let [l, r, count, N] = [0, 0, 0, A.length]
  while (l < N) {
    while (l < N && !set.has(A[l])) {
      set.add(A[l])
      count += l - r + 1
      l++
    }
    while (A[l] !== A[r]) {
      set.delete(A[r])
      r++
    }
    set.delete(A[r])
    r++
    //console.log(set, l, r, count);
  }

  return Math.min(count, 1e9)
}

var A = [3, 4, 5, 5, 2]
console.log(solution(6, A))
