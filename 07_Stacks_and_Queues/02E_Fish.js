function solution(A, B) {
  let alives = A.length
  const fishes = []
  for (let i = 0; i < A.length; i++) {
    if (B[i] === 1) {
      fishes.push(A[i])
    } else {
      for (let j = fishes.length - 1; j >= 0; j--) {
        const fish = fishes[j]
        if (fish > A[i]) {
          alives--
          break
        } else if (fish < A[i]) {
          alives--
          fishes.pop()
        }
      }
    }
  }
  return alives
}

var A = [4, 3, 2, 1, 5]
var B = [0, 1, 0, 0, 0]
console.log(solution(A, B))
