const telnet = require("telnet-client")

// The IP address and port that the 
// robo-dj telnet server is running on
const params = {
	host: 'localhost',
	port: 1234,
	shellPrompt: '',
	timeout: 1500,
}

const connect = async function(){
	const connection = new telnet()
	await connection.connect(params)

	return connection
}

const exec = async function(command){
	const connection = await connect()
	const result = await connection.send(`${command} \n`)
	await connection.end()

	return result
}

exports.uptime = () => exec("uptime")