"use strict";

const restify = require("restify");
const server = restify.createServer();

const port = process.env.JAM_API_PORT || 8080;

server.get("/hello/:name", (req, res, next) => {
  res.send({
    "name": req.params.name
  });
  return next();
});

server.listen(port, () => {
  console.log("Listening at %s!", server.url);
});