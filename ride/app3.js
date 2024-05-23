// const rl = require("readline");
// // console.dir(rl);

// let inOut = {
//   input: global.process.stdin,
//   output: global.process.stdout,
// };

// const readLine = rl.createInterface(inOut);
// console.dir(readLine);

// readLine.question("너의 이름은 무엇입니까? :", function (answer) {
//   console.log("니가 쓴 이름은 :", answer);
//   readLine.close();
// });
// -------------------------------------------------------------------
const rl = require("readline");
const fs = require("fs");

const pokemonData = JSON.parse(fs.readFileSync("./pokemon.json"));
//  console.log(pokemonData);

const convert = JSON.parse(pokemonData); // 요렇게 써서 변수 낭비 싫어서 그냥 위에 한번에 썼음
// console.log(typeof pokemonData);
// console.log(Array.isArray(pokemonData));

const readLine = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.question("포켓몬스터 이름 작성해주세요 :", function (answer) {
  let data = [];
  pokemonData.forEach((element) => {
    if (answer === element) {
      data.push(element);
      readLine.close();
    }
  });
  console.log(data);
  if (data.length === 0) {
    console.log("포켓몬스터가 존재하지 않습니다.");
  } else {
    console.log("포켓몬스터가 존재합니다.");
  }
  readLine.close();
});
