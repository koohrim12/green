const fs = require("fs");
const nowNalJJa = require("./nowNalJJa");

// console.log(nowNalJJa());

const testJson = {
  name: "구하림",
  age: 24,
  city: "대전",
};
let convertJson = JSON.stringify(testJson);

const test = fs.writeFileSync(
  `${nowNalJJa()}-text.json`,
  "hello",
  "utf-8",
  function (error) {
    if (error) {
      console.log("파일만드는 것 에러");
      console.log("에러 내용 : ", error);
    }
    console.log("잘 저장됬음");
  }
);
