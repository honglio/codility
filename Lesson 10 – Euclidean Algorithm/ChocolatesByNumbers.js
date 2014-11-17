'use strict';

var gcd = function(m, n) {

  if (m < n) {
    return gcd(n, m);
  }

  if (m % n === 0) {
    return n;
  }

  return gcd(n, m%n);

};

module.exports = function solution(N, M) {
  return  N/gcd(N, M);
};

