let root = document.getElementById("root");
console.log(root);
root.style.width = "100vw";
root.style.height = "100vh";
root.style.backgroundColor = "black";
let main = document.createElement("main");

root.appendChild(main);
console.log(main);

let div = document.createElement("div");
main.appendChild(div);
console.log(div);
let img = document.createElement("img");
img.src = "logo.png";
div.appendChild(img);
img.style.width = "900px";
img.style.height = "400px";
console.log(img);

let h1 = document.createElement("h1");
main.appendChild(h1);
let diray = h1.style;

function DIARY() {
  h1.innerHTML = "DIARY";
  h1.style.color = "white";
  h1.style.position = "absolute";
  h1.style.marginTop = "200px";
  h1.style.fontSize = "50px";
}
DIARY();
let button = document.createElement("button");
main.appendChild(button);
console.log(button);

let btn = button.style;
function startBtn() {
  button.innerHTML = "질문 받으러 가기";
  button.style.width = "300px";
  button.style.height = "100px";
  button.style.borderRadius = "30px";
}
startBtn();
let middle = main.style;
function mainContent() {
  main.style.display = "flex";
  main.style.flexDirection = "column";
  main.style.justifyContent = "center";
  main.style.alignItems = "center";
  main.style.padding = "100px";
  main.style.position = "relative";
}
mainContent();
