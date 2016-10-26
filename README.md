###fLib - functional helper library
:: JS implementations of constructs from functional world that make your life easier in everyday work with JS

:: Inspired by Haskell computational patterns

##Available constructs
 - Maybe

 ```
	var f = require('./flib');

	var a = {
		'key1':'a',
		'key2':'b'
	};


	var b = f.Maybe(a.key2);
	b.hasValue(); // -> true 

	var b = f.Maybe(a.key3);
	b.hasValue(); // -> false , key3 does not exist in object a 
 
 ``` 
