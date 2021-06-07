const RockPaperScissors = artifacts.require("RockPaperScissors");

contract("Rock Paper Scissors", (accounts) => {
  const ROCK = web3.utils.padRight(web3.utils.toHex("ROCK"), 64);
  const PAPER = web3.utils.padRight(web3.utils.toHex("PAPER"), 64);
  const SCISSORS = web3.utils.padRight(web3.utils.toHex("SCISSORS"), 64);

  it("paper beats rock", async () => {
    const contract = await RockPaperScissors.new();

    const alexRandomness = web3.utils.padRight(
      web3.utils.toHex("alexRandom"),
      64
    );
    const alexChoice = web3.utils.soliditySha3(ROCK, alexRandomness);
    await contract.play(alexChoice, { from: accounts[0] });

    const bobRandomness = web3.utils.padRight(
      web3.utils.toHex("bobRandom"),
      64
    );
    const bobChoice = web3.utils.soliditySha3(PAPER, bobRandomness);

    await contract.play(bobChoice, { from: accounts[1] });

    const result = await contract.evaluate(
      accounts[0],
      ROCK,
      alexRandomness,
      accounts[1],
      PAPER,
      bobRandomness
    );

    assert.equal(result.toString(), accounts[1]);
  });

  it("rock beats scissors", async () => {
    const contract = await RockPaperScissors.new();

    const alexRandomness = web3.utils.padRight(
      web3.utils.toHex("alexRandom"),
      64
    );
    const alexChoice = web3.utils.soliditySha3(ROCK, alexRandomness);
    await contract.play(alexChoice, { from: accounts[0] });

    const bobRandomness = web3.utils.padRight(
      web3.utils.toHex("bobRandom"),
      64
    );
    const bobChoice = web3.utils.soliditySha3(SCISSORS, bobRandomness);

    await contract.play(bobChoice, { from: accounts[1] });

    const result = await contract.evaluate(
      accounts[0],
      ROCK,
      alexRandomness,
      accounts[1],
      SCISSORS,
      bobRandomness
    );

    assert.equal(result.toString(), accounts[0]);
  });

  it("scissors beats paper", async () => {
    const contract = await RockPaperScissors.new();

    const alexRandomness = web3.utils.padRight(
      web3.utils.toHex("alexRandom"),
      64
    );
    const alexChoice = web3.utils.soliditySha3(SCISSORS, alexRandomness);
    await contract.play(alexChoice, { from: accounts[0] });

    const bobRandomness = web3.utils.padRight(
      web3.utils.toHex("bobRandom"),
      64
    );
    const bobChoice = web3.utils.soliditySha3(PAPER, bobRandomness);

    await contract.play(bobChoice, { from: accounts[1] });

    const result = await contract.evaluate(
      accounts[0],
      SCISSORS,
      alexRandomness,
      accounts[1],
      PAPER,
      bobRandomness
    );

    assert.equal(result.toString(), accounts[0]);
  });

  it("paper / paper draw", async () => {
    const contract = await RockPaperScissors.new();

    const alexRandomness = web3.utils.padRight(
      web3.utils.toHex("alexRandom"),
      64
    );
    const alexChoice = web3.utils.soliditySha3(PAPER, alexRandomness);
    await contract.play(alexChoice, { from: accounts[0] });

    const bobRandomness = web3.utils.padRight(
      web3.utils.toHex("bobRandom"),
      64
    );
    const bobChoice = web3.utils.soliditySha3(PAPER, bobRandomness);

    await contract.play(bobChoice, { from: accounts[1] });

    const result = await contract.evaluate(
      accounts[0],
      PAPER,
      alexRandomness,
      accounts[1],
      PAPER,
      bobRandomness
    );

    assert.equal(
      result.toString(),
      "0x0000000000000000000000000000000000000000"
    );
  });
});
