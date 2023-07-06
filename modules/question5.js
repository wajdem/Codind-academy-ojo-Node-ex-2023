const path = require('path');
const filePath1 = './file1.txt';
const filePath2 = './file2.txt';
const joinedPath = path.join(filePath1, filePath2);
console.log(joinedPath);