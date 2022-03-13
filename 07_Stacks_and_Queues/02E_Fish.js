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
