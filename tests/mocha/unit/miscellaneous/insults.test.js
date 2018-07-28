let testHelper = require("hubot-test-helper")
let helper = new testHelper("../../../../src/miscellaneous/insults.js")
let expect = require("chai").expect
const co = require("co")

describe("insults.js", () => {
	let room

	beforeEach(() => {
		room = helper.createRoom()
	})

	afterEach(() => {
		room.destroy()
	})

	context("Insult Me", function() {
		it("Received Response", function() {
			this.timeout(5000)
			return co(function*() {
				yield room.user.say("TestUser", "@hubot insult me")
				yield new Promise((resolve, reject) => { setTimeout(resolve, 1000)})
				expect(room.messages.length).to.equal(2)
			}.bind(this))
		})
	})
})
