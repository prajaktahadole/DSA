// Enough Fuel Consumption 

// Description
// You are given the amount of fuel consumed by a car travelling 1 km. You are also provided total distance the car will be travelling. If the total amount of fuel required by car is greater than 50 litres, print "Enough" (without quotes), else print "Go On" (without quotes).
// Input
// Input Format

// The input has one line which contains a number which is the amount of fuel required by the car in travelling 1 km space separated by the total distance the car has to cover.

// Constraints
// Both numbers < 1000

// Output
// Output one string based on the conditions mentioned above.
// Sample Input 1
// 1 46
// Sample Output 1
// Go On


function  EnoughFuel(n, d){
    
    if(n*d > 50){
        console.log("Enough");
    }else{
         console.log("Go On");
    }
    
    
    
    
}





function runProgram(input){
    input = input.split(" ").map(Number);
    var n = input[0];
    var d = input[1];
    EnoughFuel(n, d);
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
