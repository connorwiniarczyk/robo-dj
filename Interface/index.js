const robo = require("./robo-dj.js")

robo.uptime()
.then(data => console.log(data))
.catch(err => console.log(err.message))
