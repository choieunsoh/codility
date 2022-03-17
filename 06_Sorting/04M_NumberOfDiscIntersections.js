function solution(A) {
  const discs = []
  for (let i = 0; i < A.length; i++) {
    discs.push([i - A[i], i + A[i]])
  }
  discs.sort((a, b) => a[0] - b[0])
  //console.log(discs);
  let count = 0
  for (let i = 0; i < A.length; i++) {
    const right = discs[i][1]
    for (let j = i + 1; j < A.length; j++) {
      const left = discs[j][0]
      if (right >= left) {
        count++
        //console.log([i, j], [left, right], count);
        if (count > 1e7) return -1
      } else {
        break
      }
    }
  }
  return count
}

var A = [1, 5, 2, 1, 4, 0]
console.log(solution(A))
