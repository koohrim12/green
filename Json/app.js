const fs = require("fs");
const nowNalJJa = require("./nowNalJJa");

// console.log(nowNalJJa());

const htmlMarkup = {
  head: {
    title: "제이슨연습",
  },
  body: {
    div: "메뉴부분",
    li: "메인부분",
    p: "하단부분",
  },
};

let convertJson = JSON.stringify(testJson);

const test = fs.writeFile(
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
