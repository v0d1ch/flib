(function () {
	document.write("Bacon practise<br />");
	Bacon.fromEvent(document.getElementById("username"), "keyup").log();
	require('./curry1');
})()
