let http = require("http");
// 요청

let mainDocument = ` <html>
<body>
  <h1>hello</h1>
</body>
  <script>
  alert("hello")
  </script>
</html>`;
function testServer(request, response) {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  response.write(mainDocument);
  response.end();
}

// 요청이 있으면 받아주겠음
let server = http.createServer(testServer);
server.listen(3000, function () {
  console.log("서버 잘 돌아가니 ?");
  console.log("http://localhost:3000");
});
