var F = require('../src/flib');
var chai = require('../node_modules/chai/lib/chai');
var assert = chai.assert;

it('Nothing - toString should return Nothing', function() {
  var test = F.Maybe(null).toString();
  assert.equal(test, 'Nothing');
});

it('Nothing - val() should throw error', function() {
  var test = F.Maybe(null);
  assert.throws(test.val,TypeError);
});
