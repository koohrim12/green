// setTimeout(function () {
//   console.log("1.너구리가 공중부양");

//   setTimeout(function () {
//     console.log("2. 강사님 늦잠");
//   }, 1000);
// }, 1000);

// ---------------------------------------------

// setTimeout(function () {
//   console.log("1. 너구리가 공중부양");

//   a();
// }, 1000);

// function a() {
//   setTimeout(function () {
//     console.log("2. 공욱재가 늦잠");
//   }, 1000);
// }

// -------------------------------------------------

setTimeout(function () {
  console.log("1.배성빈");
}, 3000);

setTimeout(function () {
  console.log("2.김정수");
}, 2000);

setTimeout(function () {
  console.log("3.조우식");
}, 1000);

// -------------------------------------------------

setTimeout(function () {
  console.log("1.배성빈");
  setTimeout(function () {
    console.log("2.김정수");
  }, 1000);
  setTimeout(function () {
    console.log("3.조우식");
  }, 1000);
}, 1000);

// --------------------------------------
// 콘솔 찍은 다음에 줄게
setTimeout(function () {
  console.log("1.배성빈");

  setTimeout(function () {
    console.log("2.김정수");

    setTimeout(function () {
      console.log("3.조우식");
    }, 1000);
  }, 2000);
}, 3000);
