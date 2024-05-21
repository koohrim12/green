// const http = require("node:http");
// console.log(http);
// 공홈
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(
//     JSON.stringify({
//       data: "Hello World!",
//     })
//   );
// });

// server.listen(8000);

const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
  <html>
    <body>
      <h1>hello</h1>
    </body>
  </html>`);
  console.log("http://  localhost:8000");
});

server.listen(8000);
