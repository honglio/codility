'use strict';
var assert = require('assert');
var solution = require('./Dominator');

it('should return index of any element of array A in which the dominator of A occurs.' +
   'should return −1 if array A does not have a dominator.', function() {
  var A = [3,2,3,4,3,3,3,-1];
  assert.equal(3, A[solution(A)]);
  var B = [100,2,100,2,2];
  assert.equal(2, B[solution(B)]);
  var C = [1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,1];
  assert.equal(2, C[solution(C)]);
  var D = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
  assert.equal(-1, solution(D));
  var E = [3, 4, 3, 2, 3, -1, 3, 3];
  assert.equal(3, E[solution(E)]);
});

