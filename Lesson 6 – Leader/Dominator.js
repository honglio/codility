'use strict';

module.exports = function solution(A) {
  var st = [];
  var idx = -1;
  for (var i = 0; i < A.length; i++) {
    var a = A[i];
    if (!st.length || a === st[st.length-1]) {
      st.push(a);
      if (st.length === 1) idx = i;
    } else {
      st.pop();
      if (!st.length) idx = -1;
    }
  }
  if (idx === -1)
    return idx;
  var howmany = 0;
  for (var j = 0; j < A.length; j++)
    howmany += (A[j] === A[idx]) ? 1 : 0;
  return (howmany > (A.length/ 2)) ? idx : -1;
};