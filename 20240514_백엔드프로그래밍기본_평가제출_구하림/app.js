const http = require("http");
const fs = require("fs");
const server = http.createServer(function (requst, response) {
  if (requst.method === "GET") {
    if (requst.url === "/") {
      const main = fs.readFileSync("./menu/index.html");
      response.statuCode = 200;
      response.setHeader("content-Type", "text/html; charset=utf-8");
      response.write(main);
      response.end();
    }
    if (requst.url === "/index.css") {
      const style = fs.readFileSync("./menu/index.css");
      response.statuCode = 200;
      response.setHeader("content-Type", "text/css; charset=utf-8");
      response.write(style);
      response.end();
    }
    if (requst.url === "/funny.html") {
      const funny = fs.readFileSync("./menu/funny.html");
      response.statuCode = 200;
      response.setHeader("content-Type", "text/html; charset=utf-8");
      response.write(funny);
      response.end();
    }
    if (requst.url === "/anger.html") {
      const anger = fs.readFileSync("./menu/anger.html");
      response.statuCode = 200;
      response.setHeader("content-Type", "text/html; charset=utf-8");
      response.write(anger);
      response.end();
    }
    if (requst.url === "/sorry.html") {
      const sorry = fs.readFileSync("./menu/sorry.html");
      response.statuCode = 200;
      response.setHeader("content-Type", "text/html; charset=utf-8");
      response.write(sorry);
      response.end();
    }
    if (requst.url === "/Office.html") {
      const Office = fs.readFileSync("./menu/Office.html");
      response.statuCode = 200;
      response.setHeader("content-Type", "text/html; charset=utf-8");
      response.write(Office);
      response.end();
    }

    console.log(requst.url);
  }
});
server.listen(8080);
