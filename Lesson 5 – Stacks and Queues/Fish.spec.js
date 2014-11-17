'use strict';
var assert = require('assert');
var solution = require('./Fish');

it('should return the number of fish that will stay alive', function() {
  assert.equal(2, solution([4,3,2,1,5], [0,1,0,0,0]));
  assert.equal(3, solution([1,7,4,3], [0,1,1,0]));
});