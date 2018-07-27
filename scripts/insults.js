//
//	Description:
//		Commands to insult a user. 
//      Note - Replace all occurrances of "insert_name" with the desired user to insult
//

import "babel-polyfill"

module.exports = function(robot) {

	// Deliver smartass message if spoken to by a specific user
	var random_responses = [
		"(looks around suspiciously)",
		"I don't speak to trolls...",
		"Sorry, I am busy with more important things...\n(playing nintendo)",
		"trololololololololol",
		"Zzz..."
	]

	robot.receiveMiddleware(function(context, next, done) {
		if (context.response.message.user.name == "insert_username") {
			context.response.send(random_responses[[Math.floor(Math.random() * random_responses.length)]])
			done()
			return
		}

		next(done)
	})


	// Deliver a random insult
	robot.respond(new RegExp("insult me", "i"), function(msg) {
		robot.http("http://api.yomomma.info").get()((err, response, body) => {
			var str = JSON.parse(body).joke
			str = str.replace(/she/gi, "he")
			str = str.replace(/she's/gi, "he's")
			str = str.replace(/her/gi, "him")
			str = str.replace(/Yo momma/gi, msg.message.user.name)
			str = str.replace(/Your momma/gi, msg.message.user.name)
			str = str.replace(/Yo mama/gi, msg.message.user.name)
			str = str.replace(/Yo mamma/gi, msg.message.user.name)
			str = str.replace(/Your mama/gi, msg.message.user.name)
			msg.send(str)				
		})
	})
}

