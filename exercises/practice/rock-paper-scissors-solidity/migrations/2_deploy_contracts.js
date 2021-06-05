const RockPaperScissors = artifacts.require("RockPaperScissors");

module.exports = function (deployer) {
  deployer.deploy(RockPaperScissors);
};
