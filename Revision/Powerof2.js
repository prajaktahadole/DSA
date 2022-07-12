// Power of 2 -132:21:57
// Description

// Given an integer N, check if the number is power of 2 or not.

// Note : You may not use any inbuilt function.


// Input
// The first line contains T, the number of test cases.

// The first and the only line of each test case contains N, the number to be checked.

// Constraints :

// -2^31<= n <= 2^31- 1

// Output
// Print "True", if the number is a power of 2, else print "False".


// Sample Input 1 

// 2
// 2
// 3
// Sample Output 1

// True
// False
// Hint
// In the sample test case, the first number 2 is a power of 2 while the number 3 is not a power of 2. Therefore, the output is True, and for 3 the output is False.

function powerof2(n){
    
    if (n <= 0)
        return "False";
    if (n % 2 === 0)
        return powerof2(n / 2);
    if (n == 1)
        return "True";
    return "False";
  
}


function runProgram(input){
    input = input.split("\n").map(Number);
    
    for(var i = 1; i<= input[0]; i++){
        var n = input[i];
       console.log( powerof2(n));
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