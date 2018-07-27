//
//	Description:
//		General greetings and introduction messages
//

module.exports = (robot) => {

	// Constants
	let responses_greeting = ["Hey", "Hi there", "How is it going?", "How's it going?", "What's up?", "Sup"]
  
  
  
	// Greetings
	robot.hear(new RegExp("(yo|hi|hey|hello|hola|what's up|whats up) " + robot.name, "i"), (res) => {
		res.send(responses_greeting[Math.floor(Math.random() * responses_greeting.length)])
	})
  
	robot.respond(/(what is your name|whats your name|what's your name|tell me your name)/i, (res) => {
		res.send("My name is " + robot.name)
	})
}