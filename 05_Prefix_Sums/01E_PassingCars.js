function solution(A) {
  let [passes, cars] = [0, 0]
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      cars++
    } else if (A[i] === 1) {
      passes += cars
      if (passes > 1e9) return -1
    }
  }
  return passes
}

var A = [0, 1, 0, 1, 1]
console.log(solution(A))
