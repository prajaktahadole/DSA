// Longest triangle

// Description
// Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

// Input
// Input Format
// The input contains multiple testcases. The first line contains an integer t - the number of testcases.
// The next 2*t lines contain the description of the t testcases.
// The first line of each testcase contains two integers n.
// The second line of each testcase contains n space separated integers - nums[1],nums[2]....nums[n] - denoting the n elements of the array.

// Constraints
// 1 ≤ t ≤ 100
// 3 ≤ n ≤ 10^4
// 1 ≤ nums[i] ≤ 10^6

// Output
// Output Format
// For each testcase print the largest perimeter of a triangle with a non zero area, formed with 3 of these lengths, or 0 if it is not possible.

// Sample Input 1 
// 2
// 3
// 2 1 2
// 3
// 1 2 1
// Sample Output 1
// 5
// 0
// Hint
// In the second test case it is impossible to make a triangle using the three edge lengths


function  Triangle(arr , n){
    
     
    arr.sort((a, b) => b - a);
    
    let [s1, s2, s3] = [arr[0], arr[1], arr[2]];
    
    for (let i = 3; i < arr.length; i++) {
        if (s1 < s2 + s3) return s1 + s2 + s3;
        [s1, s2, s3] = [s2, s3, arr[i]];
    }
    
    return s1 < s2 + s3 ? s1 + s2 + s3 : 0;



   
    
 }
 
 
 function runProgram(input){
     
     input = input.split('\n');
     
     var line = 1;
     
     for(var i = 1; i <= +input[0]; i++)
     {
         var n = +input[line++];
         var arr = input[line++].split(" ").map(Number);  
        
         console.log(Triangle(arr,n));
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
 

 

