// is it power of 3 

// Description
// Given a number x, find whether it is a power of 3 or not.

// Input
// 1<=T<=10
// 1<=N<=1e18

// Output
// output YES or NO based on the question for each test case

// Sample Input 1 
// 3
// 2
// 3
// 4
// Sample Output 1
// NO
// YES
// NO


function powerof3(n){
    
    if (n <= 0)
        return "NO";
    if (n % 3 === 0)
        return powerof3(n / 3);
    if (n == 1)
        return "YES";
    return "NO";
  
    
}


function runProgram(input){
    input = input.split("\n").map(Number);
    
    for(var i = 1; i<= input[0]; i++){
        var n = input[i];
       console.log( powerof3(n));
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