'use strict';

module.exports = function solution(S, P, Q) {
    S = S.split('');
    var nucleotides = [];

    for(var i = 0, length = P.length; i < length; i++){
        var start = P[i];
        var end = Q[i];
        var chunk = S.slice(start, end + 1);
        if(chunk.indexOf('A') > -1){
            nucleotides.push(1);
        }else if(chunk.indexOf('C') > -1){
            nucleotides.push(2);
        }else if(chunk.indexOf('G') > -1){
            nucleotides.push(3);
        }else if(chunk[0]){
            nucleotides.push(4);
        }
    }

    return nucleotides;
};