const { Console } = require("console");
const http = require("http");
const fs = require("fs");


const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  req.statusCode = 200;
  res.setHeader("Context-Type", "text/html");
  console.log(req.url);

  if (req.url == "/") {
    req.statusCode = 200;
    res.end("<h1>This is Home</h1> <p>Welcome Home page</p>");
  } else if (req.url == "/about") {
    req.statusCode = 200;
    res.end("<h1>This is About</h1> <p>Welcome About page</p>");
  } else if (req.url == "/hello") {
    req.statusCode = 200;
    const data = fs.readFileSync('index.html');
    res.end(data.toString);
  } else {
    req.statusCode = 404;
    res.end("<h1>404 </h1> <p>Page Not Found</p>");
  }
});

server.listen(port, () => {
  console.log(`Server is listening on post ${port}`);
});
