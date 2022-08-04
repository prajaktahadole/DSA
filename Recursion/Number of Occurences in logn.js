// Number of Occurences in logn 

// Description
// You are given n different numbers and an integer k. Write a program that finds number of times k is present in log(n) time complexity.
// NOTE: YOU MUST NOT USE BRUTE FORCE SOLUTION
// WE KNOW THAT YOU KNOW BRUTE FORCE SOLUTION AND WANT YOU TRY THE LOGN SOLUTION
// USING BRUTE FORCE/LINEAR SEARCH IN THIS CASE WOULD LEAD TO DISQUALIFICATION

// Input
// Input Format :

// First line contains N and K
// Second line contains N space separated sorted integers

// Constraints :
// N<100

// Output
// Print number of times that number is present in the given list
// Sample Input 1 
// 6 3
// 2 3 3 3 6 9
// Sample Output 1

// 3


function Occurences(n, k, arr){
       
    if(n === 0){
        return 0;
    }
    if(arr[n-1] === k){
        return (1+ Occurences(n-1, k, arr));
    }
    return Occurences(n-1, k, arr);

 
 
}

function runProgram(input){
 input = input.split("\n");
 var x= input[0].split(" ").map(Number);
 var n = x[0];
 var k = x[1];
 var arr = input[1].split(" ").map(Number);
 // console.log(n, k, arr);

 console.log(Occurences(n, k, arr));
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
