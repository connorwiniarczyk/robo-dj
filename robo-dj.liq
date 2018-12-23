#!usr/bin/liquidsoap -v

set("log.file.path", "/home/connor/Desktop/<script>.log")
set("log.stdout", true)
set("server.telnet", true)

default = mksafe(
	playlist("default.pls")
)

#song = mksafe(single(
#	"http://10.0.0.146:80/The_Ting_Tings/We_Started_Nothing/03-Fruit_Machine.mp3"
#))

radio = fallback([
	request.queue(id="request"),
	default
])

output.icecast(
	%mp3(bitrate=64, samplerate=44100, stereo=false),
	mount="/radio-test.mp3",
	host="45.55.38.183", port=8000, password="hackme",
	mean(radio)
)
