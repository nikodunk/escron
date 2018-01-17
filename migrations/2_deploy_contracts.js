var Purchase = artifacts.require("./Purchase.sol");

module.exports = function(deployer) {
  deployer.deploy(Purchase, web3.eth.accounts[1], web3.eth.accounts[2]);
};
