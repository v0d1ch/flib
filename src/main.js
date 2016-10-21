(function () {

	'use strict';

	var _ = require('./flib');
	var R = require('ramda');

	// var eventValue = R.compose(R.prop('value'), R.prop('target'));

	// var listen = R.curry(function (event, target) {
	// 	return Bacon.fromEvent(document.getElementById(target), event).onValue(function(evt){
	// 		return eventValue(evt);
	// 	});
	// });

	// var attachToElm = R.curry(function(elm, val){
	// 	document.getElementById(elm).innerText = val;
	// });

	// var valueStream = R.compose(R.map(eventValue), listen('keyup'));

	// var inputStream = valueStream('username');

	// var showBindedValues = R.compose(R.map(attachToElm),log, valueStream);

	// showBindedValues('test');
	console.log(_);
	var a = _.Maybe(3);
	console.log(a.toString());

	// Bacon.fromEvent(document.getElementById("username"), "keyup").onValue(function(event){
		// 	document.getElementById("test").innerText = event.target.value;
// });
})();
