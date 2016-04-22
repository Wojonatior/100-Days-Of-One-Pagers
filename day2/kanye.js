var lines = ["The plan was, to drink until the pain over. But what's worse, the pain or the hangover?",
"I don't need your pussy, I'm on my own dick.",
"Eating Asian pussy, all I need was sweet & sour sauce.",
"The day you play me be the same day MTV play videos.",
"I done talked a lot of shit, but I just did the numbers.",
"If you fall on concrete, that's your ass' fault.",
"Head of the class, and she just won a swallowship.",
"My presence is a present--kiss my ass.",
"What if Mary was in the club, before she met Joseph, around hella thugs?",
"The same people who tried to black-ball me forgot about two things, my black balls.",
"I am a god.",
"Choke a South Park writer with a fish stick.",
"I just can't seem to get that nigga jokes, but hashtinuminesaymeabi, abi. Andifthatdongetinismin at me, at me.",
"I never understood planned parenthood, cause I never met nobody planned to be a parent in the hood.",
"You got the power to let power go.",
"Too many Urkels on your team, that's why your wins low.",
"So much head, I woke up in Sleepy Hollow.",
"Screams from the haters, got a nice ring to it--I guess every superhero need his theme music.",
"No one man should have all that power.",
"I'm lyin, I needed condoms, don't look through the glass.",
"I be speaking Swaghili.",
"When I park my Range Rover, slightly scratch your Corolla--OK, I smash your Corolla."];

var kanyeQuote = function(){
	console.log('Function Entered');
	var line = lines[Math.floor(Math.random()*lines.length)];
	console.log(line);
	$("#kanyeQuote").text(line);
};

kanyeQuote();