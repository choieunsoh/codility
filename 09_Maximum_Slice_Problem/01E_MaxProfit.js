function solution(A) {
  let [minBuy, maxProfit] = [Number.MAX_SAFE_INTEGER, 0]
  for (let day = 0; day < A.length; day++) {
    if (A[day] < minBuy) minBuy = A[day]
    if (A[day] - minBuy > maxProfit) maxProfit = A[day] - minBuy
    console.log(day, A[day], minBuy, maxProfit, A[day] - minBuy)
  }
  return maxProfit
}

var A = [23171, 21011, 21123, 21366, 20013, 20014, 1, 355, 357]
console.log(A.toString(), solution(A))
