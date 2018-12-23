const telnet = require("telnet-client")

const run = async function(){
	let connection = new telnet()

	let params = {
		host: '10.0.2.15',
		port: '1234',
		shellPrompt: '',
		timeout: 1500
	}

	await connection.connect(params)

	let res = await connection.exec('uptime')

	console.log(res)
}

console.log("test")