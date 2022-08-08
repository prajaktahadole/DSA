// N traversal Ended
// Description

// You are given a matrix of size n x n. Find theNtraversal of the matrix.
// Refer the following figure for better understanding.


// Input
// The first line contains T, the number of test cases. The first line of each test case contains N, the size of the square matrix.
// Next N lines contain N space separated integers, denoting the values of the matrix.


// Constraints
// 1 <= T <= 10
// 1 <= N <= 500
// 1 <= A[i][j] <= 1000


// Output
// For each test case, print the N traversal of the matrix on a single line, on a new line.














function nTraversal(matrix) {
  
    var N =matrix[0].length-1;
    
    var res = [];
       
     for(var i = N; i >= 0; i--)
     {
         res = res + matrix[i][0] + " ";
     }
     
     for(i = 1; i <= N; i++)
     {
         res = res + matrix[i][i]+ " ";
     }
     
     for(i = N-1 ; i >= 0; i--)
     {
         res = res + matrix[i][N]+ " ";
     }
     console.log(res);
   }
   