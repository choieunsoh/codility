function solution(H) {
  let [prevHeight, blocks] = [H[0], 1]
  const blockStack = [prevHeight]

  for (let i = 1; i < H.length; i++) {
    const height = H[i]
    while (blockStack.length && prevHeight >= height) {
      if (prevHeight === height) {
        blocks--
      }
      blockStack.pop()
      prevHeight = blockStack[blockStack.length - 1]
    }

    blockStack.push(height)
    prevHeight = height
    blocks++
  }
  return blocks
}

var H = [8, 8, 5, 7, 9, 8, 7, 4, 8]
console.log(solution(H))
