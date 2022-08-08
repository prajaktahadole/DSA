// Units Consumed 

// Description
// Electricity consumption is measured via slab rates for a particular wattage capacity, which is as follows

// test.png

// Apart from the slab rates, a fixed charge of Rs. 80 is also added to every bill.

// Given the bill, write a program to find the number of units consumed.


// Input
// Input Format:
// First and the only line of input contains the bill amount

// Constraints:
// Bill amount is an integer <= 1000

// Output
// Output the number of units consumed

// Sample Input 1 
// 930
// Sample Output 1
// 170


function  UnitsConsumed(n){
    //console.log(50*3, 100*5);
    
    var units = 0;
    n = n-80;
    
    if(n > 650){
        units = 50 + 100 + Math.floor((n-650)/10);
    }else if( n > 150 && n < 650){
         units = 50 + Math.floor((n-150)/5);
    }else{
         units = Math.floor(n/3);
    }
    
    
    console.log(units);
}







function runProgram(input){
    var n = +input;
    UnitsConsumed(n);
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
