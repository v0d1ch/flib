var a = 'flib';
if (typeof console  != "undefined"){
	if (typeof console.log != 'undefined'){
		console.olog = console.log;
	}else{
		console.olog = function() {};
	}
	console.log = function(message) {
		console.olog(message);

		var e = document.createElement('p');
		e.innerHTML = '<span class="prompt">$ </span> ' + message;
		document.getElementById('debugDiv').append(e);
	};
	console.error = console.debug = console.info =  console.log
}
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

var e = F.Maybe(d)
.bind(toUpper)
.maybe('No name', F.id);

console.log(e); // ->FLIB

var f = F.Maybe(null).maybe('No name',F.id);
console.log(f); // -> 'No name'

//mmap applies function to Monad
console.log(F.mmap(toUpper,F.Maybe(f)).val());

//composability
var g = F.compose(take4,swedish, toUpper);
console.log(g('flib functional'));

//currying with one function as param
var tu = F.curry1(take4);
console.log(tu('functional flib'));

//if you apply it to mmap than you can pass in Monad
console.log(F.mmap(tu, F.Maybe('functional')).val());

//or you can compose it
console.log(F.mmap(tu, F.Maybe('functional')).val());

function toUpper(x){return x.toUpperCase();}
function take4(x){return x.substring(0,4)}
function swedish(x){
	return x.split('').map(function(l,i) {
		return i % 2 ? l : 'F';
	}).join('');
}

