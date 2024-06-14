
const {Console} = require('console')

const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);
  req.statusCode = 200;
  res.setHeader("Context-Type", "text/html");
  res.end("<h1>This is my code</h1> <p>Hey my name is siddharth</p>");
});

server.listen(port, () => {
  console.log(`Server is listening on post ${port}`);
});
