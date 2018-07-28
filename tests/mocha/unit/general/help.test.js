let testHelper = require("hubot-test-helper")
let helper = new testHelper("../../../../src/general/help.js")
let chai = require("chai")
let expect = chai.expect


describe("help.js", () => {
	let room

	beforeEach(() => {
		room = helper.createRoom()
	})

	afterEach(() => {
		room.destroy()
	})

	context("Robot Help", function() {
		it("Received Response", async () => {
			await room.user.say("TestUser", "@hubot help")
			expect(room.messages.length).to.equal(2)
		})
	})
})
