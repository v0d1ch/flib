var F = require('../src/flib');
var chai = require('../node_modules/chai/lib/chai');
var assert = chai.assert;
var expect = chai.expect;

// Nothing

describe('maybeO', function(){
	it('maybeO if called on null should return empty object', function() {
		var test = F.maybeO(null);
		assert.equal(JSON.stringify(test), JSON.stringify({}));
	});

	it('maybeO if called on object should return that object', function() {
		var obj = {
			"a" : "b"
		};

		var test = F.maybeO(obj);
		assert.equal(JSON.stringify(test), JSON.stringify(obj));
	});
});

