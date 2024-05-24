const rl = require("readline");
// console.dir(rl);

let inOut = {
  input: global.process.stdin,
  output: global.process.stdout,
};

const readLine = rl.createInterface(inOut);
// console.dir(readLine);

readLine.question("구하림이 좋아하는 동물은 ? :", function (answer) {
  if (answer === "강아지") {
    console.log("정답 입니다.");
  } else {
    console.log("땡");
  }

  readLine.close();
});
