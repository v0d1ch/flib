(function(){

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
				throw new TypeError("cannot call val() on Nothing");
			},
			maybe: function(def, fn) {
				return def;
			},
			toString: function(){
				return 'Nothing';
			}
		};

		var Just = function Just(value) {
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
	var id = function id(x){
		return x;
	}

	//curry
	var curry1 = function _curry1(fn) {
		return function f1(a) {
			if (arguments.length === 0 || a != null && typeof a === 'object' ) {
				return f1;
			} else {
				return fn.apply(this, arguments);
			}
		};
	};

	//compose :: (b -> c) -> (a -> b) -> a -> c
	var compose = function compose() {
		var fns = arguments;

		return function (result) {
			for (var i = fns.length - 1; i > -1; i--) {
				result = fns[i].call(this, result);
			}

			return result;
		};
	};

	//mmap :: (f -> M a) -> M b
	var mmap = function mmap(fn,m){
		if(!m){
			return Maybe(m);
		}
		if(m.toString() !== 'Just' && m.toString() !== 'Nothing') return Maybe(fn.call(self, m));

		return Maybe(fn.call(self, m.val()));
	}

	var F = {
		curry1  : curry1,
		compose : compose,
		Maybe   : Maybe,
		mmap    : mmap,
		id      : id
	};

	/* istanbul ignore next */
	if (typeof exports === 'object') {
		module.exports = F;
	} else if (typeof define === 'function' && define.amd) {
		define(function() { return F; });
	} else {
		this.F = F;
	}

}.call(this));
