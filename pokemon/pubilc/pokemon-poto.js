let string = "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/";
let number = "01.png";

for (let i = 0; i < 20; i++) {
  if (i < 9) {
    console.log(`000${i + 1}` + number);
  }
}
for (let j = 0; j < 99; j++) {
  console.log(string + `00${j + 1}` + number);
}
