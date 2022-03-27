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



function miniMaxSum(arr) {
    arr.sort();
    
    var n = arr.length;
    var sum = 0;
    for(var i = 0; i < n; i++){
        sum = sum + arr[i];
    }
    console.log(sum- arr[n-1], sum- arr[0]);
   
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
