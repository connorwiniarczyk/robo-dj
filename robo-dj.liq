#!usr/bin/liquidsoap -v

set("log.file.path", "/home/connor/Desktop/<script>.log")
set("log.stdout", true)
set("server.telnet", true)

default = playlist("default.pls")

clock = single(say: I am a robot)

radio = fallback([
	clock
	# request.queue(id="request"),
	# default,
	# blank
])

output.icecast(
	%mp3(bitrate=64, samplerate=44100, stereo=false),
	mount="/radio-test.mp3",
	host="45.55.38.183", port=8000, password="hackme",
	mean(radio)
)
