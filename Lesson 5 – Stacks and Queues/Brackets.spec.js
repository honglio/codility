'use strict';
var assert = require('assert');
var solution = require('./Brackets');

it('should determine whether a given string of parentheses is properly nested.', function() {
  assert.deepEqual(solution(''), 1);
  assert.deepEqual(solution('{[()()]}'), 1);
  assert.deepEqual(solution('([)()]'), 0);
});