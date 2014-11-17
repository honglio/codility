'use strict';
var assert = require('assert');
var solution = require('./AbsDistinct');

it('should return the quantity of absolute values of array A', function() {
  assert.deepEqual(solution([-5, -3, -1, 0, 3, 6]), 5);
});