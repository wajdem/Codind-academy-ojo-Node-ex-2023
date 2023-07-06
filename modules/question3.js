const http = require('http');

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/plain');

  if (request.url === '/') {
    response.end('Hello, wajde mosbah!');
  }
});

const port = 1312;
server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});