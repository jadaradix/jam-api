"use strict";

const restify = require("restify");
const server = restify.createServer();
const port = process.env.JAM_API_PORT || 8080;

const products = require("./lib/products");

server.use(restify.CORS());

server.get("/products", (req, res, next) => {
  res.send(products);
  return next();
});

server.get("/products/:id", (req, res, next) => {
  const product = products.find((product) => (product.id === req.params.id));
  if (product) {
    res.send(product);
    return next();
  } else {
    return next(new restify.NotFoundError("Product not found"));
  }
});

server.listen(port, () => {
  console.log("Listening at %s!", server.url);
});