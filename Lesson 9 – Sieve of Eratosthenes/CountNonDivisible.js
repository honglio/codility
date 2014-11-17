'use strict';

module.exports = function solution(A) {
  var B = A.slice(0); // Clone A into B
  A.sort( function(x, y) { return x-y; } );
  // console.log(A);

  var results = {};
  for (var i=0; i<A.length; i++) {

    while (i < A.length-1 && A[i] === A[i+1]) {
      i++;
    }

    results[A[i]] = A.length - i - 1;
    for (var j=0; j<i; j++) {

      if (A[i] % A[j] !== 0) {
        results[A[i]] += 1;
      }
    }

  }

  for (i=0; i<B.length; i++) {
    B[i] = results[B[i]];
  }

  return B;
};

