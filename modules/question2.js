const fs = require('fs');

const filePath = './example.txt';
const content = 'Hello, wajde mosbah! ';

fs.writeFile(filePath, content, 'utf8', (error) => {
  if (error) {
    console.error('Not writing to the file:', error);
  } else {
    console.log('File written successfully!');
  }
});