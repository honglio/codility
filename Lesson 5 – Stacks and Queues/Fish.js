'use strict';

module.exports = function solution(A, B) {
  var st = [];
  var upstreamSurvivors = 0;
  for (var i = 0; i < A.length; i++) {
    if (B[i] === 0) {
      while (st.length > 0 && A[i] > st[st.length-1])
        st.pop();
      if (st.length === 0)
        upstreamSurvivors++
    } else {
      st.push(A[i]);
    }
  }
  return upstreamSurvivors + st.length;
};