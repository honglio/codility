'use strict';
var assert = require('assert');
var solution = require('./Nesting');

it('should determine whether given string of parentheses is properly nested.', function() {
  assert.deepEqual(1, solution(''));
  assert.deepEqual(0, solution('(()'));
  assert.deepEqual(1, solution('(()(())())'));
  assert.deepEqual(0, solution('())'));
});

