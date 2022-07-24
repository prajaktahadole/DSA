// Lower bound in logn 

// Description
// You are given n different numbers and an integer k. Write a program that finds lower bound of k in log(n) time complexity. Lower bound of a number k in a sorted list is the index of the first number which is same as k, in case the number is not present, print -1 (here the answer is given considering index to be starting from 0)
// NOTE: YOU MUST NOT USE BRUTE FORCE SOLUTION.
// WE KNOW THAT YOU KNOW BRUTE FORCE SOLUTION AND WANT YOU TO TRY THE LOGN SOLUTION.
// USING BRUTE FORCE/LINEAR SEARCH, IN THIS CASE, WOULD LEAD TO DISQUALIFICATION.


// Input
// Input Format
// First line contains N and K
// Second line contains N space separated sorted integers
// Constraints
// N<100
// Output
// Output lower bound
// Sample Input 1 
// 5 2
// 1 1 2 2 5
// Sample Output 1
// 2
// Sample Input 2 
// 5 3
// 1 1 2 2 5
// Sample Output 2
// -1


function lowerbound(n, k, arr){
    
    var low = 0;
    var high = n-1;
    var res = -1;
    
   while(low <= high){
   
        var mid = (low + Math.floor((high-low)/2));
       
       if(arr[mid]== k){
           res = mid;
           high = mid-1;
       }
       else if(arr[mid] > k){
           high= mid -1;
       }else{
           low = mid +1;
       }
   }
   
   return res;
   
}




function runProgram(input){
    
    input = input.split("\n");
    var x= input[0].split(" ").map(Number);
    var n = x[0];
    var k = x[1];
    var arr = input[1].split(" ").map(Number);
    
    console.log(lowerbound(n, k, arr));
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