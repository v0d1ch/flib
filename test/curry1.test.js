var F = require('../src/flib');
var chai = require('../node_modules/chai/lib/chai');
var assert = chai.assert;
var expect = chai.expect;

// Nothing

describe('curry1', function(){
	it('if called with fnc it should always return fnc', function() {
		var test = typeof F.curry1(add1);
		assert.equal(test,'function');
	});
});

function add1(x){
	return x + 1;
}
