// Good Pairs Ended
// Description

// Given an array A with n integers, find the number of good pairs.
// A good pair is defined as (i,j) where Aj = 2*Ai. where i and j are distinct.


// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.
// The first line of each test case contains a single integer n (1 ≤ n ≤ 10000) — the number of elements in the array A.
// The second line of each test case contains n integers (1 ≤ Ai ≤ 1000).

// Output
// For each test case, print the answer: The number of good pairs.

// Sample Input 1 
// 2
// 5
// 1 1 1 1 1
// 6
// 1 1 2 2 4 1 
// Sample Output 1
// 0
// 8



function GoodPairs(n, arr){
    
    var count = 0;
    for(var i = 0; i < n; i++)
    {
        for(var j = 0; j < n; j++)
        {
            if((arr[i] == arr[j]/2) && (i !== j)){
                count++;
            }
        }
    }
   console.log(count);   
}


function runProgram(input){
    input = input.split("\n");
    var line = 1;
    for(var i = 1; i <= +input[0]; i++){
        var n = +input[line++];
        var arr = input[line++].split(" ").map(Number);
        GoodPairs(n, arr);
    }
    
}
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
