const http = require("http");
const fs = require("fs");

const server = http.createServer(function (request, response) {
  if (request.method === "GET") {
    if (request.url === "/") {
      const html = fs.readFileSync("./public/index.html", "utf8");
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html; charset=utf-8");
      response.write(html);
      response.end();
    } else if (request.url === "/index.css") {
      const style = fs.readFileSync("./public/index.css", "utf8");
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/css; charset=utf-8");
      response.write(style);
      response.end();
    } else if (request.url === "/main.html") {
      const main = fs.readFileSync("./public/main.html", "utf8");
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html; charset=utf-8");
      response.write(main);
      response.end();
    } else if (request.url === "/front-bg.png") {
      fs.readFile("./public/front-bg.png", (err, data) => {
        if (err) {
          throw err;
        }
        response.writeHead(200, { "Content-Type": "img/png" });
        response.end(data);
      });
    } else if (request.url === "/logo.png") {
      fs.readFile("./public/logo.png", (err, data) => {
        if (err) {
          throw err;
        }
        response.writeHead(200, { "Content-Type": "img/png" });
        response.end(data);
      });
    }
  }

  console.log(request.url);
});

server.listen(3000);
