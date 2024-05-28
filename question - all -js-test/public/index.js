let root = document.getElementById("root");
console.log(root);
root.style.width = "100vw";
root.style.height = "100vh";
root.style.backgroundColor = "black";
root.style.display = "flex";
root.style.justifyContent = "center";
root.style.alignItems = "center";
// root의 자식
let div = document.createElement("div");
div.setAttribute("id", "front-bg");
root.appendChild(div);
console.log(div);

let img = document.createElement("img");
div.appendChild(img);
// 물결- bg -img
img.src = "front-bg.png";
img.style.width = "90vw";
img.style.height = " 85vh";
img.style.display = "flex";
img.style.justifyContent = "center";
img.style.alignItems = "center";
img.style.position = "relative";

console.log(img);
