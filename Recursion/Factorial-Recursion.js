// Factorial-Recursion

// Description
// The factorial of a positive integer N is the product of all positive integers less than or equal to n:
// Given a number N your task is to write a program that calculates factorial of N
// Input
// Input Format
// First and the only line contains N

// Constraints
// N<15

// Output
// Output the factorial value of N

// Sample Input 1 
// 5
// Sample Output 1
// 120
// Hint
// Sample Explanation
// Factorial of 5 = 5*4*3*2*1 = 120


function Factorial(N){

    if(N === 0 ){
        return 1;
    }
        return (N* Factorial(N-1));

} 

function runProgram(input){
    
    var N = +input;
    
    Factorial(N);
     console.log(Factorial(N));
   
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
