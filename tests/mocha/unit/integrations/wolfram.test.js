let testHelper = require("hubot-test-helper")
let helper = new testHelper("../../../../src/integrations/wolfram.js")
let expect = require("chai").expect
const co = require("co")

describe("wolfram.js", () => {
	let room

	beforeEach(() => {
		room = helper.createRoom()
	})

	afterEach(() => {
		room.destroy()
	})

	context("Look Up - Failure", function() {
		it("Received Response", function() {
			this.timeout(3000)
			return co(function*() {
				yield room.user.say("TestUser", "@hubot look up what is blargharklarlarar?")
				yield new Promise((resolve, reject) => { setTimeout(resolve, 2000)})
				expect(room.messages.length).to.equal(2)
			}.bind(this))
		})
	})
})
