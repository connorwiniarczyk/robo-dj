#!usr/bin/liquidsoap -v

set("log.file.path", "/home/connor/Desktop/<script>.log")
set("log.stdout", true)
set("server.telnet", true)

#default = mksafe(
#	single("/home/connor/Desktop/music/The Distance - Cake.mp3")
#)

radio = fallback([
	mksafe(request.queue(id="request")),
])

output.icecast(
	%mp3(bitrate=64, samplerate=44100, stereo=false),
	mount="/radio-test.mp3",
	host="45.55.38.183", port=8000, password="hackme",
	mean(radio)
)
