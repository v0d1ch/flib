var F = require('../src/flib');
var chai = require('../node_modules/chai/lib/chai');
var assert = chai.assert;
var expect = chai.expect;

// Nothing

describe('compose', function(){
	it('if called with one fnc it should always return new fnc', function() {
		var test = typeof F.compose(add1);
		assert.equal(test,'function');
	});

	it('if called with two fncs it should always return new fnc', function() {
		var test = typeof F.compose(add1, mult2);
		assert.equal(test,'function');
	});

	it('if called with three fncs it should always return new fnc', function() {
		var test = typeof F.compose(add1, mult2, add1);
		assert.equal(test,'function');
	});

	it('if called with three fncs and val it should always return result val', function() {
		var test =  F.compose(add1, mult2, add1)(2);
		assert.equal(test,7);
	});
});

function add1(x){
	return x + 1;
}

function mult2(x){
	return x * 2;
}
