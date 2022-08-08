// d-Digit 

// Description
// Given a number n, and the digit d you have to print the number of occurrences of the digit d in the number n.
// Input
// Input Format
// The first line contains two integers n, the number, and d, the digit.

// Constraints
// 1 <= n <= 10^9
// 0 <= d <= 9

// Output
// Print the number of occurrences of digit d in the number n.


// Sample Input 1 
// 124577 4
// Sample Output 1
// 1
// Sample Input 2 
// 113344887 3
// Sample Output 2
// 2

// Hint
// For the first sample, digit 4 is occurring only 1 time in the number n therefore answer is 1.
// For the second sample, digit 3 isoccurring 2 times in the number n therefore answer is 2.






function dDigit(num, n){
    
    var count = 0;
    for(var i = 0; i < num.length; i++)
    {
       if(num[i] == n){
           count++;
       } 
    }
    console.log(count);
}


function runProgram(input){
    
    input = input.split(" ");
    var num = input[0];
    var n = input[1];
    dDigit(num, n);
    // console.log(num, n);
       
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