const http = require("http");
const fs = require("fs");

const server = http.createServer(function (request, response) {
  if (request.method === "GET") {
    if (request.url === "/") {
      const one = fs.readFileSync("./pubilc/index.html", "utf8");

      response.statusCode = 200;
      response.setHeader("content-Type", "text/html; charset=utf-8");
      response.write(one);
      response.end();
    }

    if (request.url === "/rim.css") {
      const two = fs.readFileSync("./pubilc/rim.css");

      response.statusCode = 200;
      response.setHeader("content-Type", "text/CSS; charset=utf-8");
      response.write(two);
      response.end();
    }
    if (request.url === "/index.js") {
      const th = fs.readFileSync("./pubilc/index.js");

      response.statusCode = 200;
      response.setHeader("content-Type", "text/javascript; charset=utf-8");
      response.write(th);
      response.end();
    }
    if (request.url === "/now.html") {
      const now = fs.readFileSync("./pubilc/now.html");

      response.statusCode = 200;
      response.setHeader("content-Type", "text/html; charset=utf-8");
      response.write(now);
      response.end();
    }
    console.log(request.url);
  }
});
server.listen(3000);
