(function(window) {
	var byeSpeaker = {};
	var speakword = "Goodbye ";
	byeSpeaker.speak = function(name) {
		console.log(speakword + " " + name);
	}
	window.byeSpeaker = byeSpeaker;
}) (window);