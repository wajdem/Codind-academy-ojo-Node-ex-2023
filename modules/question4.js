const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  if (request.url === '/file') {
    const filePath = './file.txt';

    fs.readFile(filePath,  (error, data) => {
      if (error) {
        response.statusCode = 500;
        response.end('Internal Server Error');
      } else {
        response.setHeader('Content-Type', 'text/plain');
        response.end(data);
      }
    });
  } else {
    response.statusCode = 404;
    response.end('404 Not Found');
  }
});

const port = 1312;
server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});