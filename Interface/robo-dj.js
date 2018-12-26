const telnet = require("telnet-client")

// The IP address and port that the 
// robo-dj telnet server is running on
const params = {
	host: 'localhost',
	port: 1234,
	shellPrompt: '',
	timeout: 100,
}

let server = new telnet()

// const connect = function(){
// 	let connection = new telnet()
// 	connection.connect(params)

// 	return connection
// }

const exec = async function(command){
	server.connect()
	return server.send(`${command}\n`)
}

exports.uptime =	() => exec("uptime")
exports.help = 		() => exec("help")
exports.list = 		() => exec("list")
exports.exit =		() => exec("exit")

exports.help()
.then(res => console.log(res))

exports.list()
.then(res => console.log(res))
