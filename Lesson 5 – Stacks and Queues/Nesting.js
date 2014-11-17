'use strict';

module.exports = function solution(S) {
  var st = [];
  for (var i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      if (st.length === 0 || st[st.length-1] === '(')
        st.push(S[i]);
      else return 0;
    } else {
      if (st.length === 0 || st.pop() !== '(')
        return 0;
    }
  }
  return st.length > 0 ? 0 : 1;
};