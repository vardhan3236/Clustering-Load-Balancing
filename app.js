const cluster = require("cluster");
const os = require("os");
const numCpus = 3;
const handleRequest = require('./index');

if (cluster.isMaster) {
  console.log(`This is a Master Process with PID ${process.pid}`);
  for (let i = 0; i < numCpus; i++) cluster.fork();
} else {
  console.log(`This is a worker process with PID ${process.pid}`);
  const express = require("express");
  const app = express();

  app.use(handleRequest);
  
  app.listen(3000 + cluster.worker.id, () => {
    console.log(`Worker ${cluster.worker.id} has started`);
  });


}
