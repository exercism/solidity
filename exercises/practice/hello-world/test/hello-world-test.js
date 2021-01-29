const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", () => {
  it("should return Hello World!", async () => {
      const contract = await HelloWorld.deployed()
      const result = await contract.sayHelloWorld()
      assert.equal(result, "Hello, World!")
  })

})