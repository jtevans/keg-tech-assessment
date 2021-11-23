var assert = require('assert');
var expect = require("chai").expect;
var request = require("request");

describe('Connecting to API', function () {
  var url = 'http://localhost:5005/goats'

  it("API Status Is 200", function (done) {
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("API Returns Expected Data", function (done) {
    request(url, function (error, response, body) {
      var goats = JSON.parse(body);
      expect(goats.data.length).to.equal(20);
      expect(goats.status).to.equal(200);
      done();
    });
  });
});