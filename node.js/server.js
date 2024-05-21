const fs = require("fs");
const server = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
`;

fs.writeFile("server.html", server, (err) => {
  if (err) console.log("Error:", err);
  else console.log("File created 성공");
});
