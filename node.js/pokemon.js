const fs = require("fs");
/// Evolution html 생성
const Evolution = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id= root></div>

</body>
</html>
`;
fs.writeFile("Evolution.html", Evolution, (err) => {
  if (err) console.log("Error:", err);
  else console.log(" Evolution (진화) File created 성공");
});

function loadPokemonNames(path) {
  try {
    if (typeof path === "string") {
      const pokemonValue = fs.readFileSync(path, "utf8");
      return JSON.parse(pokemonValue);
    }
    // else 를 사용하는 대신 try catch 문법을 사용해서 에러를 잡아내는 것이
    // '에러 처리'라는 것을 명시적으로 이야기 하는 좋은 어휘
  } catch (error) {
    // 매개변수 error는 catch구문이 실행될 때 자동으로 전달되는 변수
    console.error("error:", error);
  }
}

const data = loadPokemonNames("./pokemonNames.json");
console.log(data);
