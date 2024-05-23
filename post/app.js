const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
        if (err) {
          res.writeHead(500);
        }
      });
    }
  }
});
