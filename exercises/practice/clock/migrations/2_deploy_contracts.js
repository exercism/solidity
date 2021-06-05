const Clock = artifacts.require("Clock");

module.exports = function(deployer) {
  deployer.deploy(Clock);
};
