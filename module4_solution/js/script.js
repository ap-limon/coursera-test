//esier way

(function () {
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

	for (var i = 0; i < 10; i++ ) {
		var firstLetter = names[i].charAt(0).toLowerCase();
		if (firstLetter === "j") {
				byeSpeaker.speak(names[i]);
		} else {
			helloSpeaker.speak(names[i]);
		}
		
	}

}) ();
