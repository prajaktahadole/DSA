// Take out maximum 

// Description
// Given an array of integers and a number k, find the maximum sum of a subarray of size k.

// Input
// Input Format
// First line consists of two integers n and k separated by space
// Second line consists of n integers separated by spaces.

// Constraints
// 1 <= n <= 10^7
// 1 <= k <= 10^6

// Output
// Print the maximum sum of a subarray of size k.

// Sample Input 1 
// 10 3
// -1 -1 -2 1 -2 4 1 9 3 9
// Sample Output 1
// 21



function Takeoutmaximum(n, k , arr){
    
    var max = 0;
    var sum = 0;
    for(var i = 0; i < k; i++){
        sum = sum + arr[i];
    }
     
     for(var j = k; j < arr.length; j++)
     {
         sum = sum + arr[j];
           sum = sum - arr[j-k];
           
           if (sum > max){
               max = sum;
           }
     }
     return max;
 }
 
 function runProgram(input){
     input = input.split("\n");
     var [n, k] = input[0].split(" ").map(Number);
     var arr = input[1].split(" ").map(Number);
     
     console.log(Takeoutmaximum(n, k , arr));
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
 


 