// function forObject(a, b) {
//   if (typeof a === "object") {
//     if (typeof b === "object") {
//       console.log("a, b 매개변수 모두 객체입니다.");
//     } else {
//       console.error("객체아님");
//     }
//   } else {
//     console.log("객체 아님");
//   }
// }

function forObject(a, b) {
  try {
    if (typeof a === "object") {
      if (typeof b === "object") {
        let values = [];
        for (let key in a) {
          values[0] = a[key];
        }
      }
      for (let key in b) {
        values[1] = b[key];
        console.log(values);
      }
      let add = values[0] + values[1];
      console.log("다 더한 값:", add);
    }
  } catch (error) {
    console.log(error);
    console.log("안돼");
  }
}

const a = { first: 1 };
const b = { first: 2 };
//  객체 초기화
// const b = new object{} 또다른 선언 방식
forObject(a, b);
