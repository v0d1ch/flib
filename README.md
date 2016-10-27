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
 
 // -> extract value, prints 'b'
 console.log(b.val()) 

 var c = F.Maybe(a.key3);
 
 // -> prints false , key3 does not exist in object a
 console.log(c.hasValue()); 

 var d = 'flib';
 function toUpper(x){return x.toUpperCase();}

 var e = F.Maybe(d)
 .bind(toUpper)
 .maybe('No name', F.id);

 // -> bind value to function, set default value, use Identity instead of anonimous function,  prints 'FLIB'
 console.log(e); 

 var f = F.Maybe(null).maybe('No name',F.id);
 
 // -> set default value , prints 'No name'
 console.log(f); 

 //fmap -> accepts M a or just a and returns M b
 //fmap :: f -> M a -> M b
 
 // -> map function to value, value doesen't have to be Monadic,  prints 'NO NAME'
 console.log(F.fmap(toUpper,F.Maybe(f)).val()); 



        
 ``` 
