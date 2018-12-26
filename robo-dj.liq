#!usr/bin/liquidsoap -v

set("log.file.path", "/home/connor/Desktop/<script>.log")
set("log.stdout", true)
set("server.telnet", true)


# Default Playlists
first = playlist(id="first", "default.pls")
second = playlist(id="second", "second.pls")

#The default programming schedule
schedule = switch([
	({0m - 30m}, first),
	({30m - 59m}, second)
])

#clock = single("http://10.0.0.146:80/Music/Hello.m4ahttp://10.0.0.146:80/Music/Hello.m4a")

#Build our radio by setting the priority of sources
radio = fallback(id="radio", [
	request.queue(id="board_requests"),
	schedule
])

#Add Jouny's voice at the top of the hour
#hello = single("http://10.0.0.146:80/Music/Hello.m4a")
#radio = add([
#	radio, switch([ ({0m 0s}, hello) ])
#])

#Output to IceCast
output.icecast(id="icecast",
	%mp3(bitrate=64, samplerate=44100, stereo=false),
	mount="/radio-test.mp3",
	host="45.55.38.183", port=8000, password="hackme",
	mean(mksafe(radio))
)
