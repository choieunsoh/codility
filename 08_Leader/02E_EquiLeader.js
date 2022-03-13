function solution(A) {
  const freq = {}
  let [candidate, size] = [-1, 0]
  for (const a of A) {
    freq[a] = (freq[a] || 0) + 1
    if (size === 0) {
      size++
      candidate = a
    } else {
      candidate === a ? size++ : size--
    }
  }

  let [leader, leaderCount, half] = [
    candidate,
    freq[candidate],
    Math.floor(A.length / 2),
  ]

  let [result, leftCount, rightCount] = [0, 0, leaderCount]
  for (let i = 0; i < A.length; i++) {
    if (A[i] === leader) {
      leftCount++
      rightCount--
    }

    let leftHalf = Math.floor((i + 1) / 2)
    let rightHalf = Math.floor((A.length - (i + 1)) / 2)
    if (leftCount > leftHalf && rightCount > rightHalf) {
      result++
    }
    //console.log([leftCount, leftHalf], [rightCount, rightHalf], [i, result])
  }

  return result
}

var A = [4, 3, 4, 4, 4, 2]
console.log(A.toString(), solution(A))
