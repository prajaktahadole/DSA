// Super Digit

// Description
// We define super digit of an integer N using the following rules:
// If N has only 1 digit, then its super digit is .
// Otherwise, the super digit of N is equal to the super digit of the sum of the digits of N.
// Given an integer, find the super digit of the integer.


// Input
// Input Format
// The first line contains the number of testcase T

// For each testcase:
// The first and only line contains the number N
// Constraints
// 1<=T<=10
// 1<=N<=10^(10^4)
// Output
// For each testcase, print the super digit in a new line
// Sample Input 1 
// 3
// 45
// 8
// 186
// Sample Output 1
// 9
// 8
// 6


function SuperDigit(num){
    // console.log(num, typeof num);
    
    var sum = 0;
    
    for(var i = 0; i < num.length; i++){
        sum = sum + Number(num[i]);
        
        var s= 0;
        if(sum > 9){
            sum = String(sum);
            for(var j = 0; j < sum.length; j++)
            {
                s = s + Number(sum[j]);
            }
            sum = s;
            // console.log(s);
        }
    }
    console.log(sum);
}






function runProgram(input){
    
    input = input.trim().split('\n');
    
    var tc = input[0];
    var line = 1;
    
    for(var i = 0; i < tc; i++)
    {
       
        var num = input[line];
        line++;
        
        SuperDigit(num);
        
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