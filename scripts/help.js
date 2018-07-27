//
//	Description:
//		Commands to help describe the robot's functionality and limitations
//

module.exports = (robot) => {

	// 
	robot.respond(new RegExp("help|-h|--help", "i"), (res) => {
		let robotName = robot.name.toLowerCase()
		res.send(`
        Here are some useful commands that I know: 

        *List all commands:*
            ${robotName} help
            ${robotName} --help
            ${robotName} -h

        *Greet:*
            <greeting> ${robotName}

        *Look up a phrase (Wolfram Alpha):*
            ${robotName} lookup <phrase>
            ${robotName} look up <phrase>
            ${robotName} query <phrase>
        `)
	})
}