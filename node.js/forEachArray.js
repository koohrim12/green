// forEach 는 배열 함수
const a = require("./names-data.js");
a.forEach((name) => {
  console.log(name);
});

function na(array) {
  for (let i = 0; i < array.length; i++) {
    let name = array[i];
    console.log(name);
  }
}
