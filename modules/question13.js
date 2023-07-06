const cluster = require("cluster");
const os = require("os");
if (cluster.isMaster) {
  console.log(`${process.pid}`);
  const numWorkers = os.cpus().length;
  console.log(`${numWorkers}`);
  for (let i = 0; i < numWorkers; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`${worker.process.pid}${code}${signal}`);
    cluster.fork();
  });
} else {
  console.log(`${process.pid}`);
}
