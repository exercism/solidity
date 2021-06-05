const Clock = artifacts.require("Clock");
const luxon = require("luxon");

contract("Clock", () => {
  it("should be able to add 30 days", async () => {
      const contract = await Clock.deployed()
      const date = luxon.DateTime.fromMillis(1622888639677)
      const result = await contract.addThirtyDays(date.toMillis())
      assert.equal(result.toString(), String(date.plus({days: 30}).toMillis()) )
  })


  it("should be able to add 5 years and end up with same day", async () => {
      const contract = await Clock.deployed()
      const date = luxon.DateTime.fromMillis(1622888639677)
      const result = await contract.addFiveYears(date.toMillis())
      const dateAfter5Years = date.plus({years: 5})
      assert(dateAfter5Years.hasSame(luxon.DateTime.fromMillis(Number(result.toString())), "day") )
  })


    it("should be able to add 30 days", async () => {
      const contract = await Clock.deployed()
      const date = luxon.DateTime.fromMillis(1622888639677)
      const result = await contract.subtractThirtyMinutes(date.toMillis())
      assert.equal(result.toString(), String(date.minus({minutes: 30}).toMillis()) )
  })



})