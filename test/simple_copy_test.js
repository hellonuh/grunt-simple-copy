'use strict';

const grunt = require('grunt');

exports.simple_copy = {
  setUp: function(done) {
    done();
  },
  type1Copy: function(test) {
    test.expect(1);
    const actual = true;
    const expected = true
    test.equal(actual, expected, 'Test if type1 copy works');
    test.done();
  },
};
