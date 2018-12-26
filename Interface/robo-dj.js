const telnet = require("telnet-client")

// The IP address and port that the 
// robo-dj telnet server is running on
const params = {
	host: 'localhost',
	port: 1234,
	shellPrompt: '',
	timeout: 100,
}

const connect = function(){
	let connection = new telnet()
	connection.connect(params)

	return connection
}

const exec = async function(command){
	console.log("excecuting")
	const connection = connect()
	const result = connection.send(`${command}\n`)

	console.log("result")

	return result
}

exports.uptime = () => exec("uptime")
exports.help = () => exec("help")
exports.push = (uri) => exec(`push ${uri}`)


exports.help()
.then(res => console.log(res))
