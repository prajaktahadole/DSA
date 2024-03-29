// Spiral Traversal (Rectangular Matrix) 

// Description
// You are given a matrix of size N x M.
// Print the spiral traversal of the matrix.

// Input
// The first line of the input contains T, the number of test cases.
// The first line of each test case contains N and M, the number of rows and columns in the given matrix.
// The next N lines contain M values each denoting the elements of the matrix.

// Constraints
// 1 <= T <= 10
// 1 <= N, M <= 200
// 1 <= A[i][j] <= 200

// Output
// For each test case, print the spiral traversal of the matrix, on a single line, on a new line.

// Sample Input 1 
// 2
// 3 4
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 4 3
// 1 2 3
// 4 5 6
// 7 8 9
// 10 11 12
// Sample Output 1
// 1 5 9 10 11 12 8 4 3 2 6 7 
// 1 4 7 10 11 12 9 6 3 2 5 8 
// Sample Input 2 
// 1
// 4 3
// 1 10 9
// 2 11 8
// 3 12 7
// 4 5 6 
// Sample Output 2
// 1 2 3 4 5 6 7 8 9 10 11 12 
// Hint
// The spiral traversal of the elements given in the matrix, is printed in the sample output.

function spiralTraversal(N, M, arr){
  
    var output = "";
    var top = 0;
    var bottom = N-1;
    var left = 0;
    var right = M-1;
    var count = 0;
    
        
 while(N*M > count)   
  {  
    for (var i = top; i<= bottom && N*M > count; i++)
        {
           output = output + arr[i][left] +" ";
           count++;
        }
    left++;
    for (i= left; i <= right && N*M > count; i++)
        {
           output = output + arr[bottom][i] +" ";
            count++;
        }
    bottom--;
    for (i = bottom; i>=top && N*M > count; i--)
        {
           output = output + arr[i][right] +" "; 
          count++;
        }
    right--;
    for(i = right; i >= left && N*M > count; i--)
        {
           output = output + arr[top][i] +" "; 
            count++;
        }
    top++;
  }      
      console.log(output); 
  
}
