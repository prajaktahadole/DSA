// Convert to odd 
// Description

// Given an array of positive numbers, you have to convert all the numbers to odd numbers. You can divide one number by 2 in one operation. Find the number of operations needed to convert all the numbers to odd numbers.


// Input
// Line 1. Single IntegerN

// Line 2.Ninteger separated with a single space



// Constraints:

// 10 <=N<= 10^6

// 1 <=A[i]< 10^8


// Output
// The integer value of a number of operations needed to convert all the numbers to odd numbers.

// Sample Input 1 

// 5
// 5 2 3 6 10
// Sample Output 1

// 3
// Hint

// A = [ 5, 2, 3, 6, 10 ]
// A = [ 5, 2/2, 3, 6, 10 ]  (+1)
// A = [ 5, 1, 3, 6/2, 10 ]  (+2)
// A = [ 5, 1, 3, 3, 10/2 ]  (+3)
// A = [ 5, 1, 3, 3, 5 ]       (+3)
// So the cost of converting to all odds is 3.

function Converttoodd(n, arr){
    // console.log(n, arr);
    
    var count = 0;
    for(var i = 0; i < n; i++)
    {
        if(arr[i]% 2 === 0 ){
           
           while(arr[i]% 2 === 0)
           {
               arr[i]= arr[i]/2;
               count++;
           }
           
        }
    }
    console.log(count);
}





function runProgram(input){
    input = input.split("\n");
    var n = +input[0];
    var arr = input[1].split(" ").map(Number);
    Converttoodd(n, arr);
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

