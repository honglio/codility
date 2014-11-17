'use strict';
var assert = require('assert');
var solution = require('./GenomicRangeQuery');

it('should return the value of the maximal product of any triplet', function() {
  assert.deepEqual(solution('CAGCCTA', [2, 5, 0], [4, 5, 6]), [2, 4, 1]);
});