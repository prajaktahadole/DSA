// Row Game 

// Description
// Given a matrix of dimension nxm. Find the count of distinct elements that occur in all the rows of the matrix.

// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.
// The first line of each test case contains two integers n and m (1 ≤ n,m ≤ 100) — The dimensions of the matrix.
// The next n lines of each test case contain m integers (1 ≤ Aij ≤ 100) - The input matrix.

// Output
// For each test case, print the answer: The count of distinct elements.

// Sample Input 1 
// 2
// 3 3
// 1 2 1 
// 1 3 1
// 1 2 1
// 3 3
// 1 2 3
// 1 1 3
// 1 2 3
// Sample Output 1
// 1
// 2
// Hint
// In the sample test case given, there are 2 test cases. In the first test case, the value ofn = 3andm = 3.
// The question demands that we find the number of distinct integers that occur in all the rows of the matrix. Upon looking at the elements in the matrix in the first test case, only element 1 is present in all the rows of the matrix, therefore the count of distinct integers present in all rows of the matrix is 1.
// In the second test case, again the value ofn = 3andm = 3. Upon, observation you can see that the elements1 and 3are present in all the rows of the matrix. Therefore, the count of distinct elements present in all the rows of the matrix is 2. Hence, the output 2.


function RowGame(mat,n, m){
    
    let obj = {
         
     };
     for(let i=0;i<m;i++){
         if(obj[mat[0][i]] === undefined){
             obj[mat[0][i]] = 1;
         }
     }
     for(let i=0;i<n;i++){
         for(let j=0;j<m;j++){
             if(mat[i][j] in obj && obj[mat[i][j]] === i){
                 obj[mat[i][j]]++;
             }
         }
     }
     let count = 0;
     for(let x in obj){
         if(obj[x] == n){
             count++;
         }
     }
     console.log(count);
     
  
   
    
 }
 
 
 function runProgram(input){
     
     input=input.trim().split("\n");
      
      var line = 1;
      for(let i=1; i<= +input[0]; i++)
      {
          var x = input[line++].trim().split(" ").map(Number);
          var n = x[0];
          var m = x[1];
          let arr=[];
          for(var j = 0; j < n; j++)
          {
             arr.push(input[line++].trim().split(" ").map(Number)); 
          }
       RowGame(arr,n, m);
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

 
