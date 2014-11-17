'use strict';
var assert = require('assert');
var solution = require('./MaxProfit');

it('should return the maximum possible profit from one transaction during this period.' +
   'should return 0 if it was impossible to gain any profit.', function() {
  assert.equal(356, solution([23171, 21011, 21123, 21366, 21013, 21367]));
});

