// 뭔지는 모르겠지만 매개변수 a,b 찍어줘
// function a(a, b) {
//   console.log(a);
//   console.log(b);
// }
function a(a, b) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments);
}
a("에이", "비");
