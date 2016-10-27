##fLib - functional helper library
:: JS implementations of constructs from functional world that make your life easier in everyday work with JS

:: Inspired by Haskell computational patterns

###Instalation
```
$ bower install flib --save
```
###Available constructs

 ```
 //Maybe monad implementation
 var a = {
	 'key1':'a',
	 'key2':'b'
 };

 var b = F.Maybe(a.key2);
 b.hasValue(); // -> true
 console.log(b.val()) // -> extract value, prints 'b'

 var c = F.Maybe(a.key3);
 console.log(c.hasValue()); // -> prints false , key3 does not exist in object a

 var d = 'flib';
 function toUpper(x){return x.toUpperCase();}

 var e = F.Maybe(d)
 .bind(toUpper)
 .maybe('No name', F.id);

 console.log(e); // -> bind value to function, set default value, use Identity instead of anonimous function,  prints 'FLIB'

 var f = F.Maybe(null).maybe('No name',F.id);
 console.log(f); // -> set default value , prints 'No name'

 //fmap
 fmap :: f -> a -> M b
 console.log(F.fmap(toUpper,F.Maybe(f)).val()); // -> map function to value, value doesen't have to be Monadic,  prints 'NO NAME'



        
 ``` 
