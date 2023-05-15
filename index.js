const crypto = require("crypto");

class HashRing {
  constructor(nodes) {
    this.nodes = nodes;
    this.ring = [];
    for (let node of this.nodes) {
      for (let i = 0; i < 3; i++) {
        const hash = crypto
          .createHash("sha256")
          .update(node + ":" + i)
          .digest("hex");
        const keyHash = parseInt(hash.substring(0, 8), 16);
        this.ring.push([keyHash, node]);
      }
      this.ring.sort((a, b) => a[0] - b[0]);
    }
  }

  getNode(key) {
    const hash = crypto.createHash("sha256").update(key).digest("hex");
    const keyHash = parseInt(hash.substr(0, 8), 16);
    for (let i = 0; i < this.ring.length; i++) {
      if (keyHash <= this.ring[i][0]) {
        return this.ring[i][1];
      }
    }
    return this.ring[0][1];
  }
}

const nodes = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:3002",
];
const ring = new HashRing(nodes);

module.exports = handleRequest = (req, res) => {
  let node = ring.getNode(req.url);
  res.status(200).send(`Request ${req.url} is assigned to ${node}`);
};
