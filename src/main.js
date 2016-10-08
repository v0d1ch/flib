(function () {
	var R = require('ramda');
	document.write("Bacon practise<br />");

	function extractValFromEvent(prop, event){
			return event.prop;
	}

	function setElementByIdValue(element, value){
		document.getElementById(element).value = value;
	}

	function setElementEvent(element, event){
		 return Bacon.fromEvent(document.getElementById(element), event);
	}
	var bindToElement = setElementEvent('username','keyup');
	//console.log(bindToElement);
	// var bind = R.curry(setElementByIdValue('test'), extractValFromEvent('target.value'));
	// bind(bindToElement);
	// Bacon.fromEvent(document.getElementById("username"), "keyup").onValue(function(event){
	// 	console.log(event.target.value);
	// });
})()
