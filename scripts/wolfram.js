// Description:
//   Query the Wolfram Alpha computational knowledge engine
//

import { createClient } from "wolfram"

const WolframClient = createClient(process.env.WOLFRAM_TOKEN)

module.exports = (robot) => {
	
	// Query Wolfram Alpha
	robot.respond(/(lookup|look up|query) (.*)/i, (res) => {
		let foundResult = false

		setTimeout(() => {
			if (!foundResult) {
				res.send("One sec, still looking...")
			}
		}, 4000)

		setTimeout(() => {
			if (!foundResult) {
				foundResult = true
				res.send("Sorry I couldn't find any information... Please rephrase your question.")
			}
		}, 10000)

		let matches = new RegExp(robot.name + " (.*)", "i").exec(res.message.text)
		if (matches && matches.length > 1) {
			WolframClient.query(matches[1], function(e, result) {
				if (result && result.length > 0) {
					// console.log(result) // TODO: Determine the best result to return
					if (result[1]["subpods"][0]["value"].length > 0) {
						foundResult = true
						res.send(result[1]["subpods"][0]["value"])
					}
				}

				if (!foundResult) {
					foundResult = true
					res.send("Sorry I couldn't find any information... Please rephrase your question.")
				}				
			})
		}
	})
}