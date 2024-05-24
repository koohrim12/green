const http = require("http");
const fs = require("fs");

const server = http.createServer(function (requst, response) {
  if (requst.method === "GET") {
    if (requst.url === "/") {
      const front = fs.readFileSync("./public/index.html");
      response.statuCode = 200;
      response.setHeader("content-Type", "text/html; charset=utf-8");
      response.write(front);
      response.end();
    }
    if (requst.url === "/index.js") {
      const indexJS = fs.readFileSync("./public/index.js");
      response.statuCode = 200;
      response.setHeader("content-Type", "text/javascript; charset=utf-8");
      response.write(indexJS);
      response.end();
    }
    // logo 이미지 연결
    if (requst.url === "/index.js") {
      const img = fs.readFileSync("./public/logo.png");
      response.statuCode = 200;
      response.setHeader("content-Type", "img/javascript; charset=utf-8");
      response.write(img);
      response.end();
    }
    // if (requst.url === "/main.html") {
    //   const main = fs.readFileSync("./public/main.html");
    //   response.statuCode = 200;
    //   response.setHeader("content-Type", "text/html; charset=utf-8");
    //   response.write(main);
    //   response.end();
    // }
    // if (requst.url === "/write.html") {
    //   const write = fs.readFileSync("./public/write.html");
    //   response.statuCode = 200;
    //   response.setHeader("content-Type", "text/html; charset=utf-8");
    //   response.write(write);
    //   response.end();
    // }

    console.log(requst.url);
  }
});
server.listen(3000);
