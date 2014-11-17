'use strict';
var assert = require('assert');
var solution = require('./ChocolatesByNumbers');

it('should return the number of chocolates that you will eat.', function() {
  assert.deepEqual(5, solution(10, 4));
});

