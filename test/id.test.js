var F = require('../src/flib');
var chai = require('../node_modules/chai/lib/chai');
var assert = chai.assert;
var expect = chai.expect;

// Nothing

describe('Id', function(){
	it('if param is null it should always return null', function() {
		var test = F.id(null);
		assert.equal(test,null);
	});
	it('if param is 0 it should always return 0', function() {
		var test = F.id(0);
		assert.equal(test,0);
	});
	it('if param is 1 it should always return 1', function() {
		var test = F.id(1);
		assert.equal(test,1);
	});
	it('if param is {} it should always empty object', function() {
		var test = F.id({});
		expect(test).to.be.empty;
	});
	it('if param is [] it should always empty object', function() {
		var test = F.id([]);
		expect(test).to.be.empty;
	});
});
