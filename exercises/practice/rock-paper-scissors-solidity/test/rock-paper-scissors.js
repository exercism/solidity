const RockPaperScissors = artifacts.require("RockPaperScissors");

contract("Rock Paper Scissors", (accounts) => {
  const ROCK = web3.utils.padRight(web3.utils.toHex("ROCK"), 64);
  const PAPER = web3.utils.padRight(web3.utils.toHex("PAPER"), 64);
  const SCISSORS = web3.utils.padRight(web3.utils.toHex("SCISSORS"), 64);

  it("should be able to play a move", async () => {
    const contract = await RockPaperScissors.deployed();

    const randomness = web3.utils.padRight(web3.utils.toHex("random"), 64);
    console.log("ROCK is: ", ROCK);
    const alexChoice = web3.utils.soliditySha3(ROCK, randomness);

    console.log("alexChoice", alexChoice);
    await contract.play(alexChoice, { from: accounts[0] });

    const bobChoice = web3.utils.soliditySha3(PAPER, randomness);

    console.log("bobChoice:", bobChoice);
    await contract.play(bobChoice, { from: accounts[1] });

    const result = await contract.evaluate(
      accounts[0],
      ROCK,
      randomness,
      accounts[1],
      PAPER,
      randomness
    );

    console.log("result:", result);
    console.log("accounts", accounts);
  });
});
