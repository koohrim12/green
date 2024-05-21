const names = [
  "구하림",
  "김보미",
  "김수현",
  "김정수",
  "문혜림",
  "배성빈",
  "백지원",
  "송이현",
  "신지윤",
  "유으뜸",
  "유호영",
  "이연승",
  "이재영",
  "이종수",
  "임유진",
  "정호연",
  "조우식",
  "조자연",
  "최유진",
  "황재민",
];
const studentNamesArray = require("./names-data.js");
// # javascript 방식 - 선언형
studentNamesArray.forEach((name) => {
  console.log(name);
});
// # 일반 반복문 방식 - 절차형
for (let i = 0; i < studentNamesArray.length; i++) {
  console.log(studentNamesArray[i]);
}
