function solution(A) {
  const N = A.length
  const sumSlide1 = new Array(N).fill(0)
  const sumSlide2 = new Array(N).fill(0)

  for (let i = 1, j = N - 2; i < N - 1; i++, j--) {
    sumSlide1[i] = Math.max(sumSlide1[i - 1] + A[i], 0)
    sumSlide2[j] = Math.max(sumSlide2[j + 1] + A[j], 0)
  }
  console.log(sumSlide1.join(' '))
  console.log(sumSlide2.join(' '))

  let maxSum = 0
  for (let i = 1; i < N - 1; i++) {
    maxSum = Math.max(maxSum, sumSlide1[i - 1] + sumSlide2[i + 1])
  }
  return maxSum
}

var A = [3, 2, 6, -1, 4, 5, -1, 2]
console.log(solution(A))
