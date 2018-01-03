var Escrow = artifacts.require("./EscrowSimple.sol");

module.exports = function(deployer) {
  deployer.deploy(Escrow);
};
