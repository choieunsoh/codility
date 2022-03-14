function solution(A) {
  let [maxSum, sum, start, end, s] = [A[0], A[0], 0, 0, 0]
  for (let i = 1; i < A.length; i++) {
    //sum = Math.max(A[i], sum + A[i])
    if (sum + A[i] < A[i]) {
      sum = A[i]
      s = i
    } else {
      sum += A[i]
    }
    //maxSum = Math.max(maxSum, sum)
    if (sum > maxSum) {
      maxSum = sum
      start = s
      end = i
    }
    console.log(i, A[i], sum, maxSum, [start, end])
  }
  return maxSum
}

var A = [3, 2, -6, 4, 0]
console.log(A.toString(), solution(A))

var A = [-2, -2]
console.log(A.toString(), solution(A))

var A = [-10]
console.log(A.toString(), solution(A))

var A = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log(A.toString(), solution(A))

var A = [-2, -5, 6, -2, -3, 1, 5, -6]
console.log(A.toString(), solution(A))
