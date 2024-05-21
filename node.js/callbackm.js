function a(a, b) {
  return a + b;
}
// 덧셈에 해당하는 것 들만 가능
function b(a, b, callback) {
  callback(a, b);
  // 인수인계한다,argument 를 전달한다.
}
function add(a, b) {
  return a * b;
}

console.log(
  // 함수이긴 한데 이름이 없다 - 익명함수
  b(1, 2, function (a, b) {
    console.log(a * b);
  })
);
