(function(){

	// Simple JS implementation of functional patterns that make life easier
	//
	// author: Sasa Bogicevic
	// email: brutallesale@gmail.com


	var self = this;

	/*
	* Maybe
	*/
	var Maybe = function(value) {
		var Nothing = {
			bind: function(fn) {
				return self;
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
					return Maybe(fn.call(self, value));
				},
				hasValue: function() {
					return true;
				},
				val: function() {
					return value;
				},
				maybe: function(def, fn) {
					return fn.call(self, value);
				},
				toString: function(){
					return 'Just';
				}
			};
		};

		if (typeof value === 'undefined' || value === null)
			return Nothing;

		return Just(value);
	};

	//Id :: a -> a
	var id = function(x){
		return x;
	}


	//fmap :: (f -> M a) -> M b
	var fmap = function(fn,m){
        if(m.toString() !== 'Just' && m.toString() !== 'Nothing') return Maybe(fn.call(self, m));

		return Maybe(fn.call(self, m.val()));
	}

	var F = {
		Maybe : Maybe,
		fmap  : fmap,
		id    : id
	};


	if (typeof exports === 'object') {
		module.exports = F;
	} else if (typeof define === 'function' && define.amd) {
		define(function() { return F; });
	} else {
		this.F = F;
	}

}.call(this));
