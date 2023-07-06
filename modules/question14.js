const dns = require("dns");
const hostname = "www.google.com";
dns.resolve4(hostname, (error, addresses) => {
  addresses.forEach((address) => {
    console.log(address);
  });
});
