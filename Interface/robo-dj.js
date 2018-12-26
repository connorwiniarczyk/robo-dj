const telnet = require("telnet-client")
const server = new telnet()

// The IP address and port that the 
// robo-dj telnet server is running on
const params = {
	host: 'localhost',
	port: 1234,
	shellPrompt: '',
	timeout: 100,
}

const exec = async function(command){
	server.connect(params)
	const result = server.send(`${command}\n`)
	server.end()
}

exports.uptime =	() => exec("uptime")
exports.help = 		() => exec("help")
exports.list = 		() => exec("list")
exports.exit =		() => exec("exit")
exports.skip =		() => exec("icecast.skip")

// push the given uri onto the end of the given queue
exports.push = async function(queue, uri){
	console.log("pushed")
	return exec(`${queue}.push ${uri}`)
}

//exports.push("board_requests", "http://10.0.0.146:80/Music/Hello.m4a")
//.then(res => console.log(res))
