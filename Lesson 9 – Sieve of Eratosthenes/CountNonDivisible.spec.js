'use strict';
var assert = require('assert');
var solution = require('./CountNonDivisible');

it('should return a sequence of integers representing the amount of non-divisors.', function() {
  assert.deepEqual([2, 4, 3, 2, 0], solution([3, 1, 2, 3, 6]));
});

