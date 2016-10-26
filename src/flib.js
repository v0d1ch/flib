(function(){

/*
 * Maybe
 */
var Maybe = function(value) {
	var Nothing = {
		bind: function(fn) {
			return this;
		},
		hasValue: function() {
			return false;
		},
		val: function() {
			throw new Error("cannot call val() nothing");
		},
		maybe: function(def, fn) {
			return def;
		},
		toString: function(){
			return 'Nothing';
		}
	};

	var Just = function(value) {
		return {
			bind: function(fn) {
				return Maybe(fn.call(this, value));
			},
			hasValue: function() {
				return true;
			},
			val: function() {
				return value;
			},
			maybe: function(def, fn) {
				return fn.call(this, value);
			},
			toString: function(){
				return 'Just';
			}
		};
	};

	if (typeof value === 'undefined' || value === null)
		return new Nothing;

	return new Just(value);
};


var F = {
	Maybe:Maybe
};


if (typeof exports === 'object') {
	module.exports = F;
} else if (typeof define === 'function' && define.amd) {
	define(function() { return F; });
} else {
	this.F = F;
}

}.call(this));
