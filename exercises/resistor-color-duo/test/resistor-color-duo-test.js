const HelloWorld = artifacts.require("ResisterColorDuo");

contract("ResisterColorDuo", () => {
  it("should return 10 for brown and black", async () => {
      const contract = await HelloWorld.deployed()
      const result = await contract.getNumberFromResister("brown", "black")
      assert.equal(result, "10")
  })


  it("should return 68 for blue and grey", async () => {
    const contract = await HelloWorld.deployed()
    const result = await contract.getNumberFromResister("blue", "grey")
    assert.equal(result, "68")
  })

  it("should return 47 for yellow and violet", async () => {
    const contract = await HelloWorld.deployed()
    const result = await contract.getNumberFromResister("yellow", "violet")
    assert.equal(result, "47")
  })

  it("should return 33 for orange and orange", async () => {
    const contract = await HelloWorld.deployed()
    const result = await contract.getNumberFromResister("orange", "orange")
    assert.equal(result, "33")
  })

  it("should return 33 for orange and orange", async () => {
    const contract = await HelloWorld.deployed()
    const result = await contract.getNumberFromResister("orange", "orange")
    assert.equal(result, "33")
  })


  it("should return 5 for green and purple (unknown color)", async () => {
    const contract = await HelloWorld.deployed()
    const result = await contract.getNumberFromResister("green", "purple")
    assert.equal(result, "5")
  })

})