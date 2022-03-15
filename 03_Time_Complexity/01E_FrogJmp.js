function solution(X, Y, D) {
  return Math.ceil((Y - X) / D)
}

var [X, Y, D] = [10, 85, 30]
console.log(solution(X, Y, D))
