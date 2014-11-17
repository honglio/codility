'use strict';
var assert = require('assert');
var solution = require('./MinPerimeterRectangle');

it('should return the minimal perimeter of any rectangle whose area is exactly equal to N.', function() {
  assert.equal(22, solution(30));
});

