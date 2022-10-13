// Matrix To Array 

// Description
// Given a matrix A of size n and m, you have to convert this matrix into array of size nm by joining row by row.

// Input
// Input Format

// First-line contains 2 integers n and m representing the number of rows and columns respectively of 2D array arr.

// Following n lines contains m-integers.

// Constraints
// 1 <= n <= 100
// 1 <= m <= 100
// 1 <= arr[i][j] <= 10^4

// Output
// Print the array

// Sample Input 1 
// 2 2
// 1 2 
// 3 4
// Sample Output 1
// 1 2 3 4

// Hint
// We have to just join elements row by row so
// 1 2 3 4.



function MatrixToArray(N, M, matrix){
    
    var res = "";
    for(var i = 0; i < N; i++)
    {
        for(var j = 0; j < M; j++)
        {
            res = res + matrix[i][j] + " ";
        }
    }
    
   console.log(res)
}




function runProgram(input){
    input = input.trim().split('\n');
    
    var [N, M] = input[0].trim().split(" ").map(Number)
    var arr = [];
    
   for(var i = 1; i <= N; i++)
   {
       arr.push(input[i].trim().split(" ").map(Number));
   }
   MatrixToArray(N, M, arr);
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