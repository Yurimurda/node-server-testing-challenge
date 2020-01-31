const express = require("express");

const Alpacas = require("../alpacas/alpacasModel.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "Dollie and Dot are my best friends." });
});

server.post("/alpacas", (req, res) => {
    Alpacas.insert(req.body)
  .then(alpaca => {
    res.status(201).json(alpaca);
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      message: `The server told ${this.name} "NO!"`,
    });
  });
});

server.delete("/alpacas/:id", (req, res) => {
  Alpacas.remove(req.params.id)
  .then(count => {
    if (count > 0) {
      res.status(200).json({ message: `Goodbye, ${this.name}.` });
    } else {
      res.status(404).json({ message: `Where's ${this.name}?` });
    }
  })
})

server.get("/alpacas", (req, res) => {
  Alpacas.getAll()
    .then(alpacas => {
      res.status(200).json(alpacas);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;