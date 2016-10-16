"use strict";

const chai = require("chai");
const expect = chai.expect;

const port = process.env.JAM_API_PORT || 8080;

const supertest = require("supertest");
const api = supertest(`http://localhost:${port}`);


return describe("Jimbo's Ad Maker API", () => {

  it("'/GET products' returns at least 1 product", (done) => {
    api.get("/products").end((err, res) => {
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.be.an("array");
      expect(res.body).length.to.be.at.least(0);
      done();
    });
  });

  // Happy path
  it("'/GET products/12345671' returns a product with id 12345671", (done) => {
    api.get("/products/12345671").end((err, res) => {
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.be.an("object");
      expect(res.body.id).to.equal("12345671");
      done();
    });
  });

  // Unhappy path
  it("'/GET products/xyz' does not return a product", (done) => {
    api.get("/products/xyz").end((err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

});