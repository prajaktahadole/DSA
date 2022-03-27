'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



var countpos = 0;
var countneg = 0;
var countzero = 0;

function plusMinus(arr) {
    var n = arr.length;
    for(var i = 0; i< n; i++){
        if(arr[i]> 0)
        {
            countpos++;
        }
        else if(arr[i] < 0)
        {
            countneg++;
        }else{
            countzero++;
        }
    } 
    console.log((countpos/n).toFixed(6));
    console.log((countneg/n).toFixed(6));
    console.log((countzero/n).toFixed(6));
}




function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
