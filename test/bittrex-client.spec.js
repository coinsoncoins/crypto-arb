var expect    = require("chai").expect;
var BittrexClient = require("../app/bittrex-client");
var Promise = require("bluebird");


describe("Bittrex Client", function() {
  it("returns a snapshot promise", function() {
    promise = BittrexClient.getSnapshotPromise();
    
  });
});
