// Description

// You are given a square matrix of size N x N.

// You have to print the spiral traversal of the matrix.

// Input
// The first line of the input contains T, the number of test cases.
// The first line of each test case contains N, the size of the matrix.
// The next N lines contain N integers each denoting the values of the matrix.

// Constraints
// 1 <= T <= 10
// 1 <= N <= 500
// 1 <= A[i][j] <= 500


// Output
// For each test case, print the spiral traversal of the matrix, as shown in the problem description, on a single line, on a new line.
// Sample Input 1 
// 1
// 3
// 1 2 3
// 4 5 6
// 7 8 9
// Sample Output 1

// 3 6 9 8 7 4 1 2 5 
// Sample Input 2 

// 2
// 3
// 7 8 1
// 6 8 2
// 5 4 3
// 2
// 1 2
// 3 4

function Squaremat(n, arr){
   
    let count=0; let size=n*n;
 let left=0; let  right=n-1; 
 let top =0; let bottom= n-1;
 let bag=[];
 
  
     
    while(count<size){
        for(let i=top; i<=bottom && count<size; i++){
            bag.push(arr[i][right]);
            count++;
        }
        right--;
        for(let i=right; i>=left && count<size; i--){
            bag.push(arr[bottom][i]);
        
            count++
        }
        bottom--
        for(let i=bottom; i>=top && count<size; i--){
         
            bag.push(arr[i][left]);
            count++;
        }
        left++;
        for(let i=left; i<=right && count<size; i++){
         
            bag.push(arr[top][i]);
            count++;
            
        }
        top++
       }
       console.log(bag.join(' '));
       
     
 }
 
 function runProgram(input){
      input = input.trim().split('\n');
      var tc = +input[0];
      var line = 1;
      
      for(var i = 0; i < tc; i++)
      {
          var n = +input[line];
          line++;
          var arr = [];
          
          for(var j = 0; j < n; j++)
          {
              arr.push(input[line].trim().split(" ").map(Number));
              line++;
          }
          Squaremat(n, arr);
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