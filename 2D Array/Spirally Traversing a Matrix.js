// Spirally Traversing a Matrix 

// Description
// Given a matrix of size n by n. Traverse and print the matrix in spiral form.

// Input
// Input Format
// First-line contains n
// The next n lines contain the matrix

// Constraints
// n <= 1000
// Ai <= 10000

// Output
// Print the matrix in a single line traversing it spirally
// Sample Input 1 
// 4
// 1 2 3 4
// 5 6 7 8
// 1 2 3 4
// 5 6 7 8
// Sample Output 1
// 1 2 3 4 8 4 8 7 6 5 1 5 6 7 3 2 


function spirallyTraversingAMatrix(N, matrix){
   
    var count=0;
         var size=N*N;
         var left=0; 
         var right=N-1; 
         var top =0; 
         var bottom= N-1;
         var bag=[];
         
         while(count<size){
         for(let i=left; i<=right && count<size; i++)
         {
             bag.push(matrix[top][i]);
             count++;
         }
         top++;
         
         for(let i=top; i<=bottom && count<size; i++)
         {
             bag.push(matrix[i][right]);
             count++;
         }
         right--;
         
         for(let i=right; i>=left && count<size; i--)
         {
             bag.push(matrix[bottom][i]);
             count++;
         }
         
         bottom--;
         for(let i=bottom; i>=top && count<size; i--)
         {
             bag.push(matrix[i][left]);
             count++;
         }
         left++;
 
        }
        console.log(bag.join(' '));
   
 }
 
 