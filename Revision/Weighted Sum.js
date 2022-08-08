// Weighted Sum

// Description
// Given an array A with n integers, find out the weighted sum of the array.
// The weight here refers to the index of the element (in 1-based indexing of the array).
// Formula for Weighted Sum = (Summation for all 0 <= i < n) {Wi * Ai}.
// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.
// The first line of each test case contains a single integer n (1 ≤ n ≤ 1000) — the number of elements in the array A.
// The second line of each test case contains n integers (1 ≤ Ai ≤ 100).

// Output
// For each test case, print the answer: The weighted sum.
// Sample Input 1 
// 2
// 5
// 1 2 3 4 5
// 2
// 100 1
// Sample Output 1
// 55
// 102


function WeightedSum(n, arr){
    
    var sum = 0;
    
    for(var i = 0; i < n; i++){
        sum = sum + arr[i]*(i+1);
    }
    console.log(sum);   
}
function runProgram(input){
    input = input.split("\n");
    var line = 1;
    for(var i = 1; i <= +input[0]; i++){
        var n = +input[line++];
        var arr = input[line++].split(" ").map(Number);
        WeightedSum(n, arr);
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
