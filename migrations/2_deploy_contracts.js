var NonToken = artifacts.require("./NonToken.sol");
var NonTokenSale = artifacts.require("./NonTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(NonToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(NonTokenSale, NonToken.address, tokenPrice);
  });
};
