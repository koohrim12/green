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
    // else if (requst.url === "font-bg.png") {
    //   fs.readFile("./public/font-bg.png", (err, data) => {
    //     if (err) {
    //       throw err;
    //     }
    //     response.writeHead(200, { "Content-Type": "img/png" });
    //     response.end(data);
    //   });
    // }
    else if (request.url === "/logo.png") {
      fs.readFile("./public/logo.png", (err, data) => {
        if (err) {
          throw err;
        }
        response.writeHead(200, { "Content-Type": "img/png" });
        response.end(data);
      });
    }

    console.log(requst.url);
  }
});
server.listen(3000);
