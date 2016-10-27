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
console.log(c.hasValue()); // -> false , key3 does not exist in object a

var d = 'flib';
function toUpper(x){return x.toUpperCase();}
function take2(x){return x[0] + x[1];}

var e = F.Maybe(d)
.bind(toUpper)
.maybe('No name', F.id);

console.log(e); // ->FLIB

var f = F.Maybe(null).maybe('No name',F.id);
console.log(f); // -> 'No name'

//fmap
console.log(F.mmap(toUpper,F.Maybe(f)).val());


var g = F.compose(take2, toUpper);

///composability , prints FU
console.log(g('functional'));
        
 ``` 
