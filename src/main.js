(function () {

	'use strict';

	var f = require('./flib');

	var a = {
		'key1':'a',
		'key2':'b'
	};

	var b = ['a','b','c','d'];

	var c = f.Maybe(a.key2);
	console.log(c.isNothing());
})();
