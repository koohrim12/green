// 로직을 호출 할 때 결정한다.
function calcBooha(a, b, callback) {
  callback(a, b);
}

calcBooha(10, 20, function (a, b) {
  let result = a + b;
  return result;
});

calcBooha(10, 20, function (a, b) {
  let result = a - b;
  return result;
});
console.log(calcBooha);
