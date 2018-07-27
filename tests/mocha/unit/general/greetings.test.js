let testHelper = require("hubot-test-helper")
let helper = new testHelper("../../../../src/general/greetings.js")
let chai = require("chai")
let expect = chai.expect


describe("greetings.js", () => {
	let room

	beforeEach(() => {
		room = helper.createRoom()
	})

	afterEach(() => {
		room.destroy()
	})

	it("What is your name?", async () => {
		await room.user.say("TestUser", "@hubot what is your name?")
		expect(room.messages.length).to.equal(2)
	})
})
