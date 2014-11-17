'use strict';

var perim = function(x, y) {

  return (x + y) * 2;

};

module.exports = function solution(A) {
  var min = Number.MAX_VALUE;
  for (var i=0; i*i<=A; i++) {

    if ( A % i === 0) {
      if (perim(i, A/i) < min) {
        min = perim(i, A/i);
      }
    }

  }

  return min;
};

