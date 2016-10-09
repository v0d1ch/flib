(function () {
	'use strict';

	var R = require('ramda');
	var log = function(x) { console.log(x); return x;  };

	var eventValue = R.compose(R.prop('value'), R.prop('target'));

	var listen = R.curry(function (event, target) {
		return Bacon.fromEvent(document.getElementById(target), event).onValue(function(evt){
			return eventValue(evt);
		});
	});

	var attachToElm = R.curry(function(elm, val){
		document.getElementById(elm).innerText = val;
	});

	var valueStream = R.compose(R.map(eventValue), listen('keyup'));

	var inputStream = valueStream('username');

	var showBindedValues = R.compose(R.map(attachToElm),log, valueStream);

	showBindedValues('test');
	console.log(eventValue);

	// Bacon.fromEvent(document.getElementById("username"), "keyup").onValue(function(event){
		// 	document.getElementById("test").innerText = event.target.value;
	// });
})();
