//----------Question 1 ----------

// const fs = require('fs');

// const filePath = 'example.txt';

// fs.readFile(filePath, 'utf8', (error, data) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(data);
//   }
// });

//----------Question 2 ----------

// const fs = require('fs');

// const filePath = 'example.txt';
// const content = 'Hello, wajde mosbah! ';

// fs.writeFile(filePath, content, 'utf8', (error) => {
//   if (error) {
//     console.error('Not writing to the file:', error);
//   } else {
//     console.log('File written successfully!');
//   }
// });

//----------Question 3 ----------

// const http = require('http');

// const server = http.createServer((request, response) => {
//   response.setHeader('Content-Type', 'text/plain');

//   if (request.url === '/') {
//     response.end('Hello, wajde mosbah!');
//   }
// });

// const port = 1312;
// server.listen(port, () => {
//   console.log(`http://localhost:${port}`);
// });

//----------Question 4 ----------

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((request, response) => {
//   if (request.url === '/file') {
//     const filePath = './file.txt';

//     fs.readFile(filePath, 'utf8', (error, data) => {
//       if (error) {
//         response.statusCode = 500;
//         response.end('Internal Server Error');
//       } else {
//         response.setHeader('Content-Type', 'text/plain');
//         response.end(data);
//       }
//     });
//   } else {
//     response.statusCode = 404;
//     response.end('404 Not Found');
//   }
// });

// const port = 1312;
// server.listen(port, () => {
//   console.log(`http://localhost:${port}`);
// });

//----------Question 5 ----------

// const path = require('path');
// const filePath1 = './file1';
// const filePath2 = './file2';
// const joinedPath = path.join(filePath1, filePath2);
// console.log(joinedPath);

//----------Question 6 ----------




