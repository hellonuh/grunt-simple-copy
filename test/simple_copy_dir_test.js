'use strict';

const grunt = require('grunt');
const dircompare = require('dir-compare');

exports.simple_copy = {
  setUp: function(done) {
    done();
  },
  main: function(test) {
    test.expect(1);
    const actual = true;
    const expected = (() =>{
      try{
        var res = dircompare.compareSync('test/fixtures/src', 'tmp', {compareContent:true});
        if(res.same){
          return true
        }
        return false;
      } catch(err) {
        console.log(err);
        return false;
      }
      return true;
    })()
    test.equal(actual, expected, 'Test if type1 copy works');
    test.done();
  },
};
