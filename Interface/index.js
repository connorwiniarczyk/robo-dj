const telnet = require("telnet-client")

const run = async function() {

	let connection = new telnet()

	let params = {
		host: 'localhost',
		port: 1234,
		shellPrompt: '',
		timeout: 1500,
	}

	console.log("running")

	connection.connect(params)



	console.log(await connection.send("uptime\n"))
	console.log(await connection.send("request.resolving\n"))
	console.log(await connection.send("request.push http://10.0.0.146:80/Music/The_Ting_Tings/We_Started_Nothing/08-We_Walk.mp3\n"))
}

run()

console.log("test")
