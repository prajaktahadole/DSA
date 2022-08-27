// Hamming Distance 

// Description
// Alex has two integers x and y which he received from his two friends. Find out the hamming distance so that he can know how much different are these two integers from each other.
// Hamming distance (between two strings of equal length) here is defined as the number of positions at which the corresponding bits are different.

// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 100) — the number of test cases. Then t test cases follow.
// The first line of each test case contains two integers x and y (0 ≤ x, y < 2^32).

// Output
// For each test case, print the answer: The Hamming Distance.

// Sample Input 1 
// 2
// 15 7
// 0 3
// Sample Output 1
// 1
// 2




function  HammingDistance(a, b){
  
    var n = a^b;
    var distance = 0;
    
     while( n > 0)
      {
         if (n%2 !== 0)
         {
             distance++;
         }
            
         n = n >> 1;
         
       }
      console.log(distance);
    
    
    
    
 }
 
 
 
 function runProgram(input){
     input = input.split('\n');
     var line = 1;
     for(var i = 1; i <= +input[0]; i++)
     {
         var z = input[line++].split(" ").map(Number);
         var [a, b] = z
         HammingDistance(a, b);
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
 