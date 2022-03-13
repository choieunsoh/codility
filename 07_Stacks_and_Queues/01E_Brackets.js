function solution(S) {
  if (S.length % 2 > 0) return 0
  const map = {
    '{': '}',
    '(': ')',
    '[': ']',
  }

  const stack = []
  for (const s of S) {
    if (map[s]) {
      stack.push(s)
    } else {
      if (stack.length === 0) return 0
      const last = stack.pop()
      if (map[last] !== s) return 0
    }
  }
  return stack.length === 0 ? 1 : 0
}
