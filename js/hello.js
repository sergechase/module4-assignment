(function(window) {	
	var sentence = "Hello";
	var greetings = {};	
	greetings.speak = function (name) {
		console.log(sentence + " " + name);
	}
	window.greetings = greetings;
})(window);
