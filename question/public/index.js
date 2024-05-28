const root = document.getElementById("root");
//  root라는 id를 가진 요소를 상수값으로 선언한 root라는 변수 안에 할당했다.
// console.log(root);
//  가져온 요소가 잘 가져와졌는지 기록을 확인한다.
// root 가 잘 가지고 왔는지 콘솔을 찍어서 확인한다.
const div = document.createElement("div");
// div 라는 태그를 createElement 를 이용하여 생성하고 하고 div 라는 변수에 담았다.
// console.log(div);

// div 태그가  잘 생성 됬는지 콘솔로 확인한다.
root.appendChild(div);
// div 를 root의 자식 요소로 추가한다.
function imgTag() {
  for (let i = 0; i < 2; i++) {
    // 변수 i가 0일때 i가 2보다 작으면 i 가 1씩 증가해줘
    const img = document.createElement("img");
    // img 라는 태그를 createElement 를 이용하여 생성하고 하고 img 라는 변수에 담았다.
    // console.log(img);
    // img 태그가 반복문 조건에 맞게 잘 생성 됬는지 콘솔로 확인한다.
    div.appendChild(img);
    // img 를 div의 자식으로 넣어준다.
  }
}
imgTag();
const h1 = document.createElement("h1");
// h1 태그를 createElement 를 이용하여 생성하고 하고 h1 이라는 변수에 담았다.
// console.log(h1);

// h1 태그가 잘 생성 됬는지 콘솔로 확인한다.
const button = document.createElement("button");
// button 태그를 createElement 를 이용하여 생성하고 하고 button 이라는 변수에 담았다.
// console.log(button);

// button 이 잘 생성 됬는지 콘솔로 확인한다.
div.appendChild(h1);
// h1 을 div의 자식으로 넣어준다.
div.appendChild(button);
// button 을 div의 자식으로 넣어준다.
