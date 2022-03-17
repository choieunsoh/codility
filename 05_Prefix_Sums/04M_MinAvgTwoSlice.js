function solution(A) {
  let start = 0
  let min = (A[0] + A[1]) / 2
  for (let i = 2; i < A.length; i++) {
    const two = (A[i - 1] + A[i]) / 2
    const three = (A[i - 2] + A[i - 1] + A[i]) / 3

    let min23 = Number.MAX_SAFE_INTEGER
    let s = -1
    if (three < two) {
      min23 = three
      s = i - 2
    } else {
      min23 = two
      s = i - 1
    }

    if (min23 < min) {
      min = min23
      start = s
    }
  }
  return start
}

var A = [4, 2, 2, 5, 1, 5, 8]
console.log(solution(A))
