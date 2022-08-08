// Upper Bound in LogN 

// Description
// You are given n different numbers and an integer k. Write a program that finds upper bound of k in log(n) time complexity. Upper bound of a number k in a sorted list is the index of the first number which is greater than k (here the answer is given considering index to be starting from 0)

// -> Test cases are such that there is always one number greater than k

// NOTE: YOU MUST NOT USE BRUTE FORCE SOLUTION

// WE KNOW THAT YOU KNOW BRUTE FORCE SOLUTION AND WANT YOU TRY THE LOGN SOLUTION

// USING BRUTE FORCE/LINEAR SEARCH, IN THIS CASE, WOULD LEAD TO DISQUALIFICATION


// Input
// Input Format

// First line contains N and K

// Second line contains N space separated sorted integers

// Constraints

// N<100


// Output
// Output upper bound


// Sample Input 1 

// 10 3
// 0 2 4 4 5 5 7 7 9 10
// Sample Output 1

// 2
// Sample Input 2 
// 10 4
// 0 2 4 4 5 5 7 7 9 10
// Sample Output 2
// 4



function Upperbound(n, k, arr){
    
    var low = 0;
    var high = n-1;
    var res = -1;
    
   while(low <= high){
   
        var mid = (low + Math.floor((high-low)/2));
        if(arr[mid] <= k)
        {
           low = mid + 1; 
        }else{
            res = mid;
            high = mid-1;
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
    
    console.log(Upperbound(n, k, arr));
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