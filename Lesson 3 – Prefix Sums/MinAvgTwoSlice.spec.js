'use strict';
var assert = require('assert');
var solution = require('./MinAvgTwoSlice');

it('should find the starting position of a slice whose average is minimal.', function() {
  assert.deepEqual(solution([4, 2, 2, 5, 1, 5, 8]), 1);
});