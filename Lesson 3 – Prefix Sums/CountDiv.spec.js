'use strict';
var assert = require('assert');
var solution = require('./CountDiv');

it('should return the number of integers within the range [A..B] that are divisible by K', function() {
  assert.deepEqual(solution(6, 11, 2), 3);
});