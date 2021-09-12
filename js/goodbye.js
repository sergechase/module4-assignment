(function(window) {	
	var sentence = "Goodbye";
	var goodbye = {};	
	goodbye.speak = function (name) {
		console.log(sentence + " " + name);
	}
	window.goodbye =  goodbye;
})(window);