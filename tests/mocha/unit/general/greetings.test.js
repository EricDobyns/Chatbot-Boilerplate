let testHelper = require("hubot-test-helper")
let helper = new testHelper("../../../../src/general/greetings.js")
let expect = require("chai").expect

describe("greetings.js", () => {
	let room

	beforeEach(() => {
		room = helper.createRoom()
	})

	afterEach(() => {
		room.destroy()
	})

	context("What is your name?", function() {
		it("Received Response", async () => {
			await room.user.say("TestUser", "@hubot what is your name?")
			expect(room.messages.length).to.equal(2)
		})
	})
})
