var crypto = require('crypto')

const hashMe = crypto.createHash('md5');

console.log(hashMe.digest('hello world'));
