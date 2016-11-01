var F = require('../src/flib');
var chai = require('../node_modules/chai/lib/chai');
var assert = chai.assert;
var expect = chai.expect;

// Nothing

describe('curry', function(){
	it('it should always return curried fnc', function() {
		var test = typeof F.curry(mult2);
		assert.equal(test,'function');
	});

	it('it should always return 6 if passed 2 and 3', function() {
		var test = F.curry(mult2);
		test(2);
		assert.equal(test(3),6);
	});
});

function mult2(x, y){
	return x * y;
}
