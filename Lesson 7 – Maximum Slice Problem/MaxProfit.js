'use strict';

// Timeout: large value (99) followed by short pattern (values from [1..6]) repeated 10K times
// Score 88%

var findMax = function(A, start) {
  var max = 0;
  var maxLoc = -1;
  for (var i=start; i<A.length; i++) {
    if (A[i] > max) {
      max = A[i];
      maxLoc = i;
    }
  }

  return {location: maxLoc, value: max};
};

var findMin = function(A, end) {
  var min = Number.MAX_VALUE;
  var minLoc = -1;
  for (var i=0; i<end; i++) {
    if (A[i] < min) {
      min = A[i];
      minLoc = i;
    }
  }
  return {location: minLoc, value: min};
};


module.exports = function solution(A) {
  var i = 1;
  var total = 0;
  while (i<A.length) {
    var max = findMax(A, i);
    var min = findMin(A, max.location);
    total = Math.max(total, max.value - min.value);

    i = max.location + 1;
  }

  return total;
};

