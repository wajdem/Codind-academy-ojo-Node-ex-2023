const fs = require('fs');

const filePath = './example.txt';

fs.readFile(filePath, 'utf8', (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
