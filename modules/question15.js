const net = require('net');

const server = net.createServer((socket) => {
  socket.setEncoding('utf8');
  socket.on('data', (data) => {
    console.log(`Received data from client: ${data}`);
    socket.write('Server received your data.');
  });
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});
const port = 3000;
server.listen(port, () => {
  console.log(` A running TCP server${port}`);
});
