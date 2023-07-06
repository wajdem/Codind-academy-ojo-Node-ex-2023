const url = require("url");

const parseUrl = url.parse(
  "http://www.example.com:8080/path?query=value#fragment"
);

console.log(
  `protocol = ${parseUrl.protocol} /// host = ${parseUrl.host} /// pathname = ${parseUrl.pathname} /// search = ${parseUrl.search} /// hash = ${parseUrl.hash}`
);
