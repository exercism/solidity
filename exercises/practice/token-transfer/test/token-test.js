const Token = artifacts.require("Token");

contract("Token", (accounts) => {
  /**
   * MINT
   */
  it("should be able to mint 100 tokens", async () => {
    const contract = await Token.deployed();
    const resultMint = await contract.mint(100, { from: accounts[0] });
    console.log(resultMint);
    const result = await contract.balanceOf(accounts[0]);
    assert.equal(result, 100);
  });

  it("should not be able to mint 0 tokens", async () => {
    const contract = await Token.deployed();
    try {
      await contract.mint(0, { from: accounts[0] });
    } catch (error) {
      assert.equal(error.reason, "cannot mint 0 tokens");
    }
  });

  it("should be able to mint 1000 tokens to accounts[1]", async () => {
    const contract = await Token.deployed();
    await contract.mint(100, { from: accounts[1] });
    const result = await contract.balanceOf(accounts[1]);
    assert.equal(result, 100);
  });

  /**
   * **********************************************************
   */

  /**
   * Transfer
   */
  it("should be able to transfer 0 tokens", async () => {
    const contract = await Token.deployed();
    await contract.transfer(0, accounts[1], { from: accounts[0] });
    const balance0 = await contract.balanceOf(accounts[0]);
    const balance1 = await contract.balanceOf(accounts[1]);
    assert(balance0, web3.utils.toBN("0"));
    assert(balance1, web3.utils.toBN("0"));
  });

  it("should not be able to transfer tokens you dont have!", async () => {
    const contract = await Token.deployed();
    try {
      await contract.transfer(10, accounts[1], { from: accounts[0] });
    } catch (error) {
      assert.equal(error.reason, "cannot send more than what you own");
    }
  });

  it("should not be able to transfer to address 0", async () => {
    const contract = await Token.deployed();
    try {
      await contract.transfer(
        10,
        "0x0000000000000000000000000000000000000000",
        { from: accounts[1] }
      );
    } catch (error) {
      assert.equal(error.reason, "transfer to address 0 is not allowed");
    }
  });

  it("should be able to mint and transfer 100 tokens", async () => {
    const contract = await Token.deployed();
    await contract.mint(100, { from: accounts[0] });
    await contract.transfer(100, accounts[1], { from: accounts[0] });
    const balance0 = await contract.balanceOf(accounts[0]);
    const balance1 = await contract.balanceOf(accounts[1]);
    assert(balance0, web3.utils.toBN("0"));
    assert(balance1, web3.utils.toBN("10"));
  });
  /**
   * **********************************************************
   */

  /**
   * BalanceOf
   */

  it("balanceOf an arbitrary account should be 0", async () => {
    const contract = await Token.deployed();
    const balance0 = await contract.balanceOf(accounts[0]);
    assert(balance0, web3.utils.toBN("0"));
  });

  /**
   * **********************************************************
   */
});
