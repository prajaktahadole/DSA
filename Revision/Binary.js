// Binary Equivalent 
// Description

// Given an integer n, you need to find out its binary representation
// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.
// The first line of each test case contains a single integer n (1 ≤ n ≤ 100000) — the number.


// Output
// For each test case, print the answer: The binary representation of the integer.
// Sample Input 1 
// 2
// 15
// 128
// Sample Output 1
// 1111
// 10000000


function BinaryEquivalent(n){

    var binary = [];
    while(n > 0){
       rem = n%2;
       binary.push(rem);
        n = Math.floor(n/2);
       
        
    }
     //console.log(binary);
     var i = 0; 
     var j = binary.length-1;
     
     while(i< j){
        var temp = binary[i];
         binary[i] = binary[j];
         binary[j] = temp;
         
         i++;
         j--;
     }
     console.log(binary.join(""));
     
 }
 
 
 
function runProgram(input){
     input = input.split('\n');
     
     for(var i = 1; i <= +input[0]; i++)
     {
         var n = +input[i];
         BinaryEquivalent(n);
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
 
 