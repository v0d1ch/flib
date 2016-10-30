var F = require('../src/flib');
var chai = require('../node_modules/chai/lib/chai');
var assert = chai.assert;
var expect = chai.expect;

// Nothing

describe('Nothing.toString()', function(){
	it('.toString() if called on null should return Nothing', function() {
		var test = F.Maybe(null).toString();
		assert.equal(test, 'Nothing');
	});
});

describe('Nothing.val()', function(){
	it('.val() if called on null should throw error', function() {
		var test = F.Maybe(null);
		assert.throws(test.val,TypeError);
	});
});

describe('Nothing.hasValue()', function(){
	it('.hasValue() called on null should return false', function() {
		var test = F.Maybe(null);
		expect(test.hasValue()).to.not.be.true;
	});

	it('Nothing.hasValue() called on number should return true', function() {
		var test = F.Maybe(1);
		expect(test.hasValue()).to.be.true;
	});
});

describe('Nothing.maybe()', function(){
	it('.maybe() called on null should return default value', function() {
		var test = F.Maybe(null).maybe('', F.id);
		assert.equal(test,'');
	});
	it('Nothing.maybe() called on number should return that number', function() {
		var test = F.Maybe(1).maybe('', F.id);
		assert.equal(test,1);
	})
})

describe('Nothing.bind()', function(){
	it('.bind called on null should return {}', function() {
		var test = F.Maybe(null).bind(null);
		expect(test).to.be.empty;
	});

	it('.bind called with add1 on 1 should return 2', function() {
		var test = F.Maybe(1).bind(add1);
		assert.equal(test.val(), 2);
	});
});

// JUST

describe('Just.toString()', function(){
	it('.toString() if called on 1 should return Just', function() {
		var test = F.Maybe(1).toString();
		assert.equal(test, 'Just');
	});
});

describe('Just.val()', function(){
	it('.val() if called on 1 should return 1', function() {
		var test = F.Maybe(1);
		assert.equal(test.val(),1);
	});
});

describe('Just.hasValue()', function(){
	it('.hasValue() called on null should return false', function() {
		var test = F.Maybe(null);
		expect(test.hasValue()).to.not.be.true;
	});

	it('Just.hasValue() called on number should return true', function() {
		var test = F.Maybe(1);
		expect(test.hasValue()).to.be.true;
	});
});

describe('Just.maybe()', function(){
	it('.maybe() called on null should return default value', function() {
		var test = F.Maybe(null).maybe('', F.id);
		assert.equal(test,'');
	});

	it('.maybe() called on number should return that number', function() {
		var test = F.Maybe(1).maybe('', F.id);
		assert.equal(test,1);
	})
})

describe('Just.bind()', function(){
	it('.bind called on null should return {}', function() {
		var test = F.Maybe(null).bind(null);
		expect(test).to.be.empty;
	});

	it('.bind called with add1 on 1 should return 2', function() {
		var test = F.Maybe(1).bind(add1);
		assert.equal(test.val(), 2);
	});
});


function add1(x){
	return x + 1;
}
