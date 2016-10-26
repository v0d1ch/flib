##fLib - functional helper library
:: JS implementations of constructs from functional world that make your life easier in everyday work with JS

:: Inspired by Haskell computational patterns

###Instalation
```
$ bower install flib --save
```
###Available constructs
 - Maybe

 ```

	//basic
	var a = {
		'key1':'a',
		'key2':'b'
	};


	var b = F.Maybe(a.key2);
	b.hasValue(); // -> true 
	console.log(b.val()) // -> extract value, prints 'b'
	
	var b = F.Maybe(a.key3);
	b.hasValue(); // -> false , key3 does not exist in object a 
	
	//bind and maybe
	var a = 'flib';
	var b = F.Maybe(a).bind(function(x){
		return x.toUpperCase();
	}).maybe('No name', function(y){
		return y;
	});

	console.log(b); // ->FLIB

	var d = F.Maybe(null);

	var e = d.maybe('No name', function(y){
		return y;
	});

	console.log(e); // -> 'No name'

        
 ``` 
