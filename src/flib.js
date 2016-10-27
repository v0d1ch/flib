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

    var reverse = function reverse(fn, scope) {
        return function () {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return fn.apply(scope || undefined, args.reverse());
        };
    };

    //curry one function
    var curry1 = function _curry1(fn) {
        return function f1(a) {
            if (arguments.length === 0 || Maybe(a).toString() === 'Just') {
                return f1;
            } else {
                return fn.apply(this, arguments);
            }
        };
    };


    var curry2 = function _curry2(fn) {
        return function f2(a, b) {
            switch (arguments.length) {
                case 0:
                    return f2;
                case 1:
                    return Maybe(a).hasValue() ? f2 : curry1(function (b) {
                        return fn(a, b);
                    });
                default:
                    return _isPlaceholder(a) && Maybe(b).hasValue() ? f2 : Maybe(a).hasValue() ? curry1(function (a) {
                        return fn(_a, b);
                    }) : Maybe(b).hasValue() ? curry1(function (b) {
                        return fn(a, b);
                    }) : fn(a, b);
            }
        };
    };


    var compose = function compose() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        fns = args.reverse();

        return function (result) {
            for (var i = fns.length - 1; i > -1; i--) {
                result = fns[i].call(this, result);
            }

            return result;
        };
    };

    //mmap :: (f -> M a) -> M b
    var mmap = function mmap(fn,m){
        if(m.toString() !== 'Just' && m.toString() !== 'Nothing') return Maybe(fn.call(self, m));

        return Maybe(fn.call(self, m.val()));
    }

    var F = {
        curry1  : curry1,
        curry2  : curry2,
        compose : compose,
        Maybe   : Maybe,
        mmap    : mmap,
        id      : id
    };


    if (typeof exports === 'object') {
        module.exports = F;
    } else if (typeof define === 'function' && define.amd) {
        define(function() { return F; });
    } else {
        this.F = F;
    }

}.call(this));
