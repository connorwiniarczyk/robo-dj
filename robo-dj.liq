#!usr/bin/liquidsoap -v

set("log.file.path", "/home/connor/Desktop/<script>.log")
set("log.stdout", true)
set("server.telnet", true)

first = playlist("default.pls")
second = playlist("second.pls")

clock = single("http://10.0.0.146:80/Music/Hello.m4a")

radio = fallback([
	request.queue(id="request"),
	switch([
		({0m-40m}, first),
		({40m-59m}, second)
	]),
])

#ignore(radio)

radio = add([
	radio, switch([ ({0s}, clock) ])
])

output.icecast(
	%mp3(bitrate=64, samplerate=44100, stereo=false),
	mount="/radio-test.mp3",
	host="45.55.38.183", port=8000, password="hackme",
	mean(mksafe(radio))
)
