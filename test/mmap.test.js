
var F = require('../src/flib');
var chai = require('../node_modules/chai/lib/chai');
var assert = chai.assert;
var expect = chai.expect;

// Nothing

describe('mmap', function(){
	it('if called with one fnc and Maybe it should always always return new Maybe', function() {
		var test = F.Maybe(1);
		var map = F.mmap(add1, test);
		assert.equal(map.toString(),'Just');
	});

	it('if called with one fnc and plain var it should always new Maybe', function() {
		var test = 1;
		var map = F.mmap(add1, test);
		assert.equal(map.toString(),'Just');
	});

	it('if called with one fnc and null or undefined var it should always return Nothing', function() {
		var test = undefined;
		var map = F.mmap(add1, test);
		assert.equal(map.toString(),'Nothing');
	});

	it('if called with one fnc and false var it should always return Just', function() {
		var test = false;
		var map = F.mmap(add1, test);
		assert.equal(map.toString(),'Just');
	});

	it('if called with one fnc and true var it should always return Just', function() {
		var test = true;
		var map = F.mmap(add1, test);
		assert.equal(map.toString(),'Just');
	});
});

function add1(x){
	return x + 1;
}

