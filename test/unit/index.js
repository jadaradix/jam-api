"use strict";

const chai = require("chai");
const expect = chai.expect;

const products = require("../../lib/products");

return describe("Jimbo's Ad Maker", () => {

  it("returns at least 1 product", (done) => {
    expect(products).length.to.be.at.least(0);
    return done();
  });

  it("returns a product with id, name, description and link", (done) => {
    const properties = [
      "id",
      "name",
      "description",
      "link"
    ];
    for (const property of properties) {
      expect(products[0]).to.have.property(property);
    }
    return done();
  });

});