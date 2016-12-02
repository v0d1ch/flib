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

		if (typeof value === 'undefined' || value === null) return Nothing;
		if (objPropsNotDefined(value)) return Nothing;
		return Just(value);
	};


	function maybeO(item){
		return Maybe(item).maybe({}, F.id);
	}

	function maybeS(item){
		return Maybe(item).maybe('', F.id);
	}

	function maybeN(item){
		return Maybe(item).maybe(0, F.id);
	}

	function maybeA(item){
		return Maybe(item).maybe([], F.id);
	}

	function maybeB(item){
		return Maybe(item).maybe(false, F.id);
	}

	function maybeOr(item, def){
		return Maybe(item).maybe(def, F.id);
	}

	function objPropsNotDefined(o){
		var props = Object.getOwnPropertyNames(o);
		for(var i in props){
			if(!o.hasOwnProperty(i)){
				return true;
			}
		}

		return false;
	}

	//Id :: a -> a
	var id = function id(x){
		return x;
	}

    //curry
    var curry = function(func) {
        var acc, args = Array.prototype.slice.call(arguments, 2);
        return acc = function() {
            args = args.concat(Array.prototype.slice.call(arguments, 0));
            if (args.length >= func.length) {
                return func.apply(this, args);
            } else {
                return function() {
                    return acc.apply(this, arguments);
                }
            }
        }
    }

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
		curry   : curry,
		compose : compose,
		Maybe   : Maybe,
		mmap    : mmap,
		id      : id,
	    maybeO  : maybeO,
	    maybeS  : maybeS,
	    maybeN  : maybeN,
	    maybeA  : maybeA,
	    maybeB  : maybeB,
	    maybeOr : maybeOr

	};

	/* istanbul ignore next */
	if (typeof exports === 'object') {
		module.exports = F;
	} else  if (typeof define === 'function' && define.amd) {
		define( function() { return F; });
	} else {
		this.F = F;
	}

}).call(this);
